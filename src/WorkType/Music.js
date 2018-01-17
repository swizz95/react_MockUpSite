import React, { Component } from 'react'
import {BrowserRouter as Router ,NavLink} from "react-router-dom";
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
import WorkCard from "./WorkCard";

export default class Music extends Component{
    render(){
        return(
            <div>
                <Header as='h1' style={{ fontSize: '2em' }}>
                    <Icon size='small' color='orange' name='video play'/>
                    Music </Header>

                <Grid columns={4} >
                    <Grid.Row>
                        <Grid.Column>
                            <WorkCard
                            title = "Writing Song for Our School"
                            owner = "PMR School"
                            descript = "We want your creation for make new song to our school. "
                            rate = "฿10,000" />
                        </Grid.Column>

                        <Grid.Column>
                           <WorkCard
                            title = "After Effect Editor for Special Effect"
                            owner = "Bridge Studio."
                            descript = "New Short Movie is comming but we don't have who make special effect."
                            rate = "Up to ฿25,000" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

        )
    }
}