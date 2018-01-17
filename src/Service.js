import React, { Component } from 'react'
import {BrowserRouter as Router ,NavLink} from "react-router-dom";
import Footer from './Footer'

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
        <NavLink activeClassName='active' to='/'><Menu.Item as='a'>Home</Menu.Item></NavLink>
        <NavLink exact activeClassName='active' to='/services'><Menu.Item as='a' active>Services</Menu.Item></NavLink>
        <NavLink activeClassName='active' to='/company'><Menu.Item as='a'>Company</Menu.Item></NavLink>
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

export default class Service extends Component{
    render(){
        return(
            <div>
                <FixedMenu/>
                <Segment style={{ paddingTop:'5rem' }} vertical color='orange'>
                 <Container textAlign='justified'>
                     <Header as='h1' style={{ fontSize: '2em' }}>
                         <Icon size='small' color='orange' name='info'/>
                         Our Services</Header>
                 </Container>
                </Segment>

                <Segment style={{ paddingTop:'2rem' }} vertical>
                    <Container textAlign='justified'>
                     <Header as='h2' icon textAlign='center'>
                        <Icon name='users' circular />
                        <Header.Content>
                            Project's Owner Services
                        </Header.Content>
                    </Header>

                     <Grid columns='two' divided>
                         <Grid.Row>
                             <Grid.Column>
                                 <p style={{ fontSize: '1.33em' }}>
                                     <Icon size='huge' color='blue' name='linkedin square'/>
                                     Truthful Freelances's Profile From LinkedIn.
                                 </p>
                             </Grid.Column>
                             <Grid.Column>
                                <p style={{ fontSize: '1.33em' }}>
                                     <Icon size='huge' color='orange' name='cogs'/>
                                     Make Dicitions Easier From Our Rating System.
                                 </p>
                             </Grid.Column>
                         </Grid.Row>

                         <Grid.Row>
                             <Grid.Column>
                                <p style={{ fontSize: '1.33em' }}>
                                     <Icon size='huge' color='orange' name='law'/>
                                      Win-Win Stiuation From Tracking System.
                                 </p>
                             </Grid.Column>
                             <Grid.Column>
                                 <p style={{ fontSize: '1.33em' }}>
                                     <Icon size='huge' color='orange' name='mail'/>
                                      Have Problem! Direct Message to Our Support Teams.
                                 </p>
                             </Grid.Column>

                         </Grid.Row>
                     </Grid>
                 </Container>
             </Segment>

                <Segment style={{ paddingTop:'5rem' }} vertical>
                    <Container textAlign='justified'>
                     <Header as='h2' icon textAlign='center'>
                        <Icon name='id badge' circular />
                        <Header.Content>
                            Freelancer
                        </Header.Content>
                    </Header>

                     <Grid columns='two' divided>
                         <Grid.Row>
                             <Grid.Column>
                                 <p style={{ fontSize: '1.33em' }}>
                                     <Icon size='huge' color='blue' name='linkedin'/>
                                     No Need to Create New Account. Use It From LinkedIn.
                                 </p>
                             </Grid.Column>
                             <Grid.Column>
                                <p style={{ fontSize: '1.33em' }}>
                                     <Icon size='huge' color='orange' name='search'/>
                                     You Can Find Interest Job Easily. Search It By Catagory.
                                 </p>
                             </Grid.Column>
                         </Grid.Row>

                         <Grid.Row>
                             <Grid.Column>
                                <p style={{ fontSize: '1.33em' }}>
                                     <Icon size='huge' color='orange' name='linkify'/>
                                      Tell the World! Shows Your LinkIn's Profiles Instantly.
                                 </p>
                             </Grid.Column>
                             <Grid.Column>
                                 <p style={{ fontSize: '1.33em' }}>
                                     <Icon size='huge' color='orange' name='mail'/>
                                      Have Problem! Direct Message to Our Support Teams.
                                 </p>
                             </Grid.Column>

                         </Grid.Row>
                     </Grid>
                 </Container>
             </Segment>

                <Footer />

            </div>

         )
     }
}
