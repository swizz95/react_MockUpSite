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

export default class More extends Component{
    render(){
        return(
            <div>
                <Header as='h1' style={{ fontSize: '2em' }}>
                    <Icon size='small' color='orange' name='spinner'/>
                    ETC </Header>

            </div>

        )
    }
}