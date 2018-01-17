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
  Segment, Form, TextArea,
  Visibility,
} from 'semantic-ui-react'

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
        <NavLink activeClassName='active' to='/'><Menu.Item as='a'>Home</Menu.Item></NavLink>
        <NavLink exact activeClassName='active' to='/services'><Menu.Item as='a' >Services</Menu.Item></NavLink>
        <NavLink activeClassName='active' to='/company'><Menu.Item as='a'>Company</Menu.Item></NavLink>
        <NavLink activeClassName='active' to='/contact'><Menu.Item as='a'active>Contact</Menu.Item></NavLink>

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

export default class Contact extends Component{
    render(){
        return(
            <div>
                <FixedMenu/>
                <Segment style={{ paddingTop:'5rem' }} vertical color='orange'>
                 <Container textAlign='justified'>
                     <Header as='h1' style={{ fontSize: '2em' }}>
                         <Icon size='small' color='orange' name='phone'/>
                         Contact</Header>
                 </Container>
                </Segment>

                <Segment style={{ paddingTop:'0.5rem' }} vertical color='orange'>
                 <Container textAlign='justified'>
                     <Grid centered columns={2}>
                         <Grid.Column>
                             <Segment style={{ paddingTop:'5rem' }} vertical >
                                 <Container textAlign='center'>
                                    <Header as='h2' icon>
                                         <Icon name='help' color={'grey'} />
                                        Need More Help
                                         <Header.Subheader>
                                             Contact our support team for tecnicial problems.
                                         </Header.Subheader>
                                     </Header>
                                     <br/><br/>
                                     <Form>
                                         <Form.Group unstackable widths={2}>
                                             <Form.Input required label='First name' placeholder='First name' />
                                             <Form.Input label='Last name' placeholder='Last name' />
                                         </Form.Group>
                                         <Form.Group widths={2}>
                                             <Form.Input required label='Email' placeholder='Email' />
                                             <Form.Input label='Phone' placeholder='Phone' />
                                         </Form.Group>
                                         <TextArea placeholder='Message' style={{ minHeight: 200 }} />
                                         <br/><br/>
                                         <Form.Checkbox required label='I agree to the Terms and Conditions' />
                                         <Button color={'orange'} type='submit' size={'big'}>
                                             Submit</Button>
                                     </Form>

                                 </Container>
                             </Segment>
                         </Grid.Column>
                     </Grid>
                 </Container>
                </Segment>
                 <Footer/>


            </div>




        )
    }
}