import React, { Component } from 'react'
import {BrowserRouter as Router ,NavLink} from "react-router-dom";
import {
  Button,
  Container,
 Rating,
  Header,
  Icon,
  Image,
  List,
  Divider,
} from 'semantic-ui-react'
import avatar from '../assets/avatar.png'

export default class Profiles extends Component{
    render(){
        return(
            <div>
                <Header as='h1' style={{ fontSize: '2em' }}>
                    <Icon size='small' color='orange' name='user'/>
                    Profiles </Header>

                 <Container text>
                     <Header as='h2' size='huge'>
                         <Image circular src={avatar} />
                         {' '}Welcome Back, Patrick
                     </Header>

                     <Header as='h3' size='medium'>
                         Your Score:&nbsp; <Rating icon='heart' defaultRating={4} maxRating={5} disabled/>
                     </Header>
                     <br/>
                     <Header as='h2' icon='info' content='Contact Info' />
                     <List size={'big'}>
                         <List.Item icon='phone' content='Phone: 081-456-xxxx' />
                         <List.Item
                             icon='marker' content='Address: 112/456 Ramintra 56 alley, Ramintra Rd.
                             Bang Khen, Bangkok, 10220' />
                         <List.Item icon='mail' content={'patrick25@live.com'} />
                         <List.Item icon='linkedin' content={'https://www.linkedin.com/profile/view?id=…'} />
                     </List>

                     <Divider horizontal>Need Freelancer?</Divider>

                     <Container textAlign='center'>
                          <NavLink to='/create'>
                              <Button animated='fade' size='huge' color='orange'>
                                  <Button.Content visible>Create Project</Button.Content>
                                  <Button.Content hidden>
                                      <Icon name='right arrow' />
                                  </Button.Content>
                              </Button></NavLink>
                     </Container>

                 </Container>
            </div>

        )
    }
}