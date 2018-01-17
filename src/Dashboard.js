import React, { Component } from 'react'
import {
    Redirect ,
    NavLink,
    Route,
    HashRouter} from "react-router-dom";
import Footer from './Footer'

import {
  Button,
  Container,
 Rating,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,Item,Popup,
  Card,
} from 'semantic-ui-react'

import Profiles from './WorkType/Profiles'
import Programming from './WorkType/Programming'
import Music from './WorkType/Music'
import Graphic from './WorkType/Graphic'
import Marketing from './WorkType/Marketing'
import Writing from './WorkType/Writing'
import Staff from './WorkType/Staff'
import More from './WorkType/More'
import CreateWork from "./CreateWork";
import HomepageLayout from "./HomepageLayout";


const FixedMenu = () => (
  <Menu fixed='top' size='medium'>
    <Container>
        <Header as='h1' style={{ fontSize: '2em', paddingTop: '1em' }}>
            Freelanize </Header>

        <Menu.Menu position='right'>
            <Menu.Item className='item'>
                <Popup
                    trigger={<Button icon='mail' />}
                    content='No Message'/>
            </Menu.Item>

            <Menu.Item className='item'>
                <NavLink activeClassName='active' to='/'><Button as='a' onClick={this.signOut}>Log Out</Button></NavLink>
            </Menu.Item>

      </Menu.Menu>
    </Container>
  </Menu>
)

export default class Dashboard extends  Component{
    state = { activeItem: 'profiles',  home: false }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    signOut = (e) => {
    e.preventDefault()
    this.setState({ home: true })
  }

    render(){
        const { activeItem } = this.state
        const { from } = this.props.location.state || '/dashboard'
        const { home } = this.state

        return(
            <HashRouter>
            <div>
                <FixedMenu/>
                <Segment padded style={{ paddingTop:'5.5rem' }}>
                     <Grid>
                         <Grid.Row>
                             <Grid.Column width={1}>
                                 <Menu icon='labeled' vertical>
                                     <NavLink to="/profiles">
                                         <Menu.Item name='profiles' active={activeItem === 'profiles'}
                                                    onClick={this.handleItemClick}>
                                             <Icon name='user' />
                                             Profiles
                                         </Menu.Item></NavLink>

                                     <NavLink to="/programming">
                                         <Menu.Item name='programming' active={activeItem === 'programming'}
                                                    onClick={this.handleItemClick}>
                                             <Icon name='computer' />
                                             Web & Programming
                                         </Menu.Item></NavLink>

                                     <NavLink to="/music">
                                         <Menu.Item name='video play' active={activeItem === 'video play'}
                                                onClick={this.handleItemClick}>
                                         <Icon name='video play' />
                                         Music & Videos
                                     </Menu.Item></NavLink>

                                     <NavLink to="/graphic">
                                         <Menu.Item name='graphic' active={activeItem === 'graphic'}
                                    onClick={this.handleItemClick}>
                                         <Icon name='idea' />
                                         Graphic Design
                                     </Menu.Item></NavLink>

                                     <NavLink to="/marketing">
                                         <Menu.Item name='marketing' active={activeItem === 'marketing'}
                                                    onClick={this.handleItemClick}>
                                             <Icon name='shopping bag' />
                                             Marketing
                                         </Menu.Item></NavLink>

                                     <NavLink to="/writing">
                                         <Menu.Item name='writer' active={activeItem === 'writer'}
                                                    onClick={this.handleItemClick}>
                                             <Icon name='write' />
                                             Writer
                                         </Menu.Item></NavLink>

                                     <NavLink to="/staff">
                                         <Menu.Item name='staff' active={activeItem === 'staff'}
                                                    onClick={this.handleItemClick}>
                                             <Icon name='travel' />
                                          Staff
                                         </Menu.Item></NavLink>

                                     <NavLink to="/more">
                                         <Menu.Item name='etc' active={activeItem === 'etc'}
                                                    onClick={this.handleItemClick}>
                                             <Icon name='spinner' />
                                             ETC
                                         </Menu.Item></NavLink>
                                 </Menu>

                             </Grid.Column>
                             <Grid.Column width={14}>
                                 <Container textAlign='left'>
                                    <div name='content'>
                                        <Route path="/profiles" component={Profiles}/>
                                        <Route path="/programming" component={Programming}/>
                                        <Route path="/music" component={Music}/>
                                        <Route path="/graphic" component={Graphic}/>
                                        <Route path="/marketing" component={Marketing}/>
                                        <Route path="/writing" component={Writing}/>
                                        <Route path="/staff" component={Staff}/>
                                        <Route path="/more" component={More}/>
                                        <Route path="/create" component={CreateWork}/>

                                    </div>
                                 </Container>
                             </Grid.Column>
                         </Grid.Row>
                     </Grid>
                </Segment>
                <Footer/>
                {home && (
                    <Redirect to={from || '/'}/>
                )}
            </div>
            </HashRouter>



        )
    }
}