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

export default class Staff extends Component{
    render(){
        return(
            <div>
                <Header as='h1' style={{ fontSize: '2em' }}>
                    <Icon size='small' color='orange' name='travel'/>
                    Staff </Header>

                 <Grid columns={4} >
                    <Grid.Row>
                        <Grid.Column>
                            <WorkCard
                            title = "Bartender @ Silom Club"
                            owner = "Varayut"
                            descript = "Working for 3 days on Friday to Sunday at Silom Club. Serve beverage to customers. "
                            rate = "฿80 per a hour" />
                        </Grid.Column>
                        <Grid.Column>
                            <WorkCard
                            title = "Coffee Shop Cashier"
                            owner = "Sathorn Coffee Shop"
                            descript = "Working for 5 days part-time from 4 pm. to 10 pm. "
                            rate = "฿45 per a hour" />
                        </Grid.Column>

                    </Grid.Row>
                 </Grid>
            </div>

        )
    }
}