import React, { Component } from 'react'
import {
  Button,
  Card,
} from 'semantic-ui-react'

export default class WorkCard extends Component{
    render(){
        let {title, owner,descript, rate} = this.props;
        owner = "Project Owner: " + owner;
        rate = "Price Rate: " + rate;
        return(
            <div>
              <Card color='orange'>
                  <Card.Content>
                      <Card.Header>
                          {title}
                      </Card.Header>
                      <Card.Meta>
                          {owner}
                      </Card.Meta>
                      <Card.Description>
                          {descript}
                      </Card.Description>
                      <Card.Description>
                          <br/>
                          {rate}
                      </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                      <div className='ui two buttons'>
                          <Button basic color='green'>Interest</Button>
                      </div>
                  </Card.Content>
              </Card>
            </div>
        )
    }
}