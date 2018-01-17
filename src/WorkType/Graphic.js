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

export default class Graphic extends Component{
    render(){
        return(
            <div>
                <Header as='h1' style={{ fontSize: '2em' }}>
                    <Icon size='small' color='orange' name='idea'/>
                    Graphic </Header>

                <Grid columns={4} >
                    <Grid.Row>
                        <Grid.Column>
                            <WorkCard
                            title = "Design Bakery Store's Logo"
                            owner = "Baker Sweet"
                            descript = "We just open our store and need logo for it."
                            rate = "Ask for more details." />
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </div>

        )
    }
}