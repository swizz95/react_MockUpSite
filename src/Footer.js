import React, { Component } from 'react'
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

export default  class Footer extends Component{
    render() {
        return (
            <Segment inverted vertical style={{padding: '5em 0em'}}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Site Map'/>
                                <List link inverted>
                                    <List.Item as='a'>Home</List.Item>
                                    <List.Item as='a'>Service</List.Item>
                                    <List.Item as='a'>Company</List.Item>
                                    <List.Item as='a'>Contact</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Connects With Us'/>
                                <List link inverted>
                                    <List.Item as='a'>Facebook</List.Item>
                                    <List.Item as='a'>Twitter</List.Item>
                                    <List.Item as='a'>LinkIn</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header as='h4' inverted>Freelanize</Header>
                                <p>&copy; Copyright 2017, Freelanize Corperation, All Rights Reserved</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        )
    }
}