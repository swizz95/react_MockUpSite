import React, { Component } from 'react'
import {BrowserRouter as Router ,NavLink} from "react-router-dom";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Footer from './Footer'
import Pic from './assets/logo.png'
import person1 from './assets/person1.png'
import person2 from './assets/person2.png'
import person3 from './assets/person3.png'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 13.730187, lng: 100.779284 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 13.730187, lng: 100.779284 }} />}
  </GoogleMap>
))


const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
        <NavLink activeClassName='active' to='/'><Menu.Item as='a'>Home</Menu.Item></NavLink>
        <NavLink activeClassName='active' to='/services'><Menu.Item as='a' >Services</Menu.Item></NavLink>
        <NavLink activeClassName='active' to='/company'><Menu.Item as='a' active>Company</Menu.Item></NavLink>
        <NavLink activeClassName='active' to='/contact'><Menu.Item as='a'>Contact</Menu.Item></NavLink>

        <Menu.Menu position='right'>
        <Menu.Item className='item'>
         <NavLink activeClassName='active' to='/login'><Button as='a'>Log in</Button></NavLink>
        </Menu.Item>
            <Menu.Item>
                <Button as='a' color='orange'
                  href='https://www.linkedin.com/start/join'
                  target='_blank'
                  >Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)


export default class Company extends Component{
    render() {
        return (
            <div>
                <FixedMenu/>

                <Segment style={{ paddingTop:'5rem' }} vertical color='orange'>
                 <Container textAlign='justified'>
                     <Header as='h1' style={{ fontSize: '2em' }}>
                         <Icon size='small' color='orange' name='rss'/>
                         Company</Header>
                 </Container>
                </Segment>

                <Segment style={{ paddingTop:'1rem' }} vertical>
                     <Container textAlign='justified'>
                         <MyMapComponent
                             isMarkerShown
                             googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                             loadingElement={<div style={{ height: `100%` }} />}
                             containerElement={<div style={{ height: `400px` }} />}
                             mapElement={<div style={{ height: `100%` }} />}
                         />
                     </Container>
                </Segment>

                <Segment style={{ paddingTop:'2rem' }} vertical color='orange'>
                    <Container textAlign='justified'>
                        <Grid>
                            <Grid.Column width={4}>
                                    <Image
                                   src={Pic}
                                   rounded
                                    />
                            </Grid.Column>
                            <Grid.Column width={9}>
                                <Header as='h1'>
                                    Freelanize - The Freelance Platform
                                </Header>
                                <Header as='h3'>
                                    Contact Information:
                                </Header>
                                    <List size={'big'}>
                                        <List.Item icon='phone' content='Phone: +662-xxx-xxxx, +661-xxx-xxxx' />
                                        <List.Item
                                            icon='marker' content='Address: 421/59, Chalong Krung Road,
                                            Lat Krabang District, Bangkok 10520' />
                                        <List.Item icon='mail' content={'support@freelanize.com'} />
                                        <List.Item icon='linkify' content={'www.freelanize.com'} />
                                    </List>

                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header as='h3'>
                                    System Developers:
                                </Header>
                                 <List>
                                     <List.Item>
                                         <Image avatar src={person1} size={'tiny'} />
                                         <List.Content>
                                             <List.Header as='a'>SWizZer</List.Header>
                                             <List.Description>Front-End Developer<br/>UX Design</List.Description>
                                         </List.Content>
                                     </List.Item>
                                     <List.Item>
                                         <Image avatar src={person3} size={'tiny'} />
                                         <List.Content>
                                             <List.Header as='a'>Dev2</List.Header>
                                             <List.Description>Front-End Developer<br/>UX Design</List.Description>
                                         </List.Content>
                                     </List.Item>

                                 </List>
                            </Grid.Column>
                        </Grid>
                    </Container>
                </Segment>
)


                <Footer/>
            </div>

        )
    }

}