import React, { Component } from 'react'
import {
    BrowserRouter as Router ,
    NavLink,
    Redirect,
    Route} from "react-router-dom";

import firebase from 'firebase';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu, Form,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import Footer from "./Footer";


const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
        <NavLink activeClassName='active' to='/'><Menu.Item as='a'>Home</Menu.Item></NavLink>
        <NavLink activeClassName='active' to='/services'><Menu.Item as='a' >Services</Menu.Item></NavLink>
        <NavLink activeClassName='active' to='/company'><Menu.Item as='a'>Company</Menu.Item></NavLink>
        <NavLink activeClassName='active' to='/contact'><Menu.Item as='a'>Contact</Menu.Item></NavLink>

        <Menu.Menu position='right'>
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

 var config = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxxxx ",
    databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxxxxx ",
    projectId: "xxxxxxxxxxxxxxxxxxxxxxxxxx ",
    storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxxx ",
    messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxx "
  };
firebase.initializeApp(config)
const auth =  firebase.auth
const provider = new firebase.auth.FacebookAuthProvider()

export default class Login extends Component{
    constructor(props){
    super(props);
    this.state = {
        fireRedirect: false,
        facebook: false,
        user:null
    }
  }
   submitForm = (e) => {
    e.preventDefault()
    this.setState({ fireRedirect: true })
  }

  login = () => {
    var that = this;
    const result = auth().signInWithPopup(provider).then(function(result) {
      var user = result.user;
      console.log(user);
      that.setState({user: user});
      this.setState({facebook: true});
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  logout = () => {
    var that = this;
    auth().signOut().then(function() {
      that.setState({user: null});
    }).catch(function(error) {
    });
  }
  renderName = () => {
    const {user} = this.state
    if(user)
      return (<div><img src={`${user.photoURL}`} />{user ? `Hi, ${user.displayName}!` : 'Hi!'}</div>)
  }

    render() {
         const { from } = this.props.location.state || '/login'
        const { fireRedirect } = this.state
        const { facebook } = this.state
        return (
            <div>
                <FixedMenu/>

                <Segment style={{ paddingTop:'5rem' }} vertical color='orange'>
                 <Container textAlign='justified'>
                     <Grid centered columns={2}>
                         <Grid.Column>
                             <Segment style={{ paddingTop:'5rem' }} vertical >
                                 <Container textAlign='center'>
                                     <Header as='h2' icon>
                                         <Icon name='lock' color={'grey'} />
                                        Sign In
                                         <Header.Subheader>
                                             No Need to Create New Account. Use it from Facebook or LinkedIn
                                         </Header.Subheader>
                                     </Header>

                                      <Segment padded color='orange'>
                                          <Form size='large'  onSubmit={this.submitForm}>
                                                  <Form.Field label='E-mail' control='input'
                                                              placeholder='E-mail' />
                                                  <Form.Field label='Password' control='input'
                                                              placeholder='Password' type='password'/>
                                              <Button animated={'fade'} size={'huge'} color={'orange'} type='submit'>
                                                  <Button.Content visible>
                                                      <Icon name='key' />
                                                  </Button.Content>
                                                  <Button.Content hidden as='h4' >
                                                      Login
                                                  </Button.Content>
                                              </Button>
                                               </Form>


                                              <Divider hidden />

                                          <Divider horizontal>Or</Divider>
                                          <Button animated={'fade'} onClick={this.login} size={'huge'} color={'blue'}>
                                          <Button.Content visible>
                                              <Icon name='facebook official' />
                                          </Button.Content>
                                          <Button.Content hidden as='h4'>
                                              Facebook
                                          </Button.Content>
                                      </Button>

                                          <Button animated={'fade'} onClick={this.login} size={'huge'} color={'blue'}>
                                          <Button.Content visible>
                                              <Icon name='linkedin' />
                                          </Button.Content>
                                          <Button.Content hidden as='h4'>
                                              LinkedIn
                                          </Button.Content>
                                      </Button>

                                      </Segment>
                                 </Container>
                             </Segment>
                         </Grid.Column>
                     </Grid>
                 </Container>
                </Segment>
                 <Footer/>
                {fireRedirect && (
          <Redirect to={from || '/dashboard'}/>
        )}

        {facebook && (
          <Redirect to={from || '/dashboard'}/>
        )}


            </div>



        )
    }
}