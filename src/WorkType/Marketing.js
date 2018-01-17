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
import WorkCard from './WorkCard'

export default class Marketing extends Component{
    render(){
        return(
            <div>
                <Header as='h1' style={{ fontSize: '2em' }}>
                    <Icon size='small' color='orange' name='shopping bag'/>
                    Marketing </Header>


            </div>

        )
    }
}