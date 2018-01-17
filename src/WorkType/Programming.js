import React, { Component } from 'react'
import {
  Grid,
  Header,
  Icon,
} from 'semantic-ui-react'
import WorkCard from "./WorkCard";

export default class Programming extends Component{
    render(){
        return(
            <div>
                <Header as='h1' style={{ fontSize: '2em' }}>
                    <Icon size='small' color='orange' name='computer'/>
                    Programming </Header>

                <Grid columns={4}>
                    <Grid.Row>
                        <Grid.Column>
                            <WorkCard
                            title = "React Website Developer"
                            owner = "Design Webi Inc."
                            descript = "We need to develops new one-page website using React."
                            rate = "starting from ฿5,000" />
                        </Grid.Column>

                        <Grid.Column>
                           <WorkCard
                            title = "Android Application Developer"
                            owner = "Orige Soft."
                            descript = "We want person who have java skill to build android app using android studio."
                            rate = "Up to ฿10,000" />
                        </Grid.Column>

                        <Grid.Column>
                             <WorkCard
                            title = "Edit website template using HTML & CSS"
                            owner = "true online"
                            descript = "Quick to edit website template by order."
                            rate = "Up to ฿4,000" />
                        </Grid.Column>

                        <Grid.Column>
                            <WorkCard
                            title = "Design SQL Database for Conference Registration"
                            owner = "IEEE Associate"
                            descript = "Shortly, we will have academic conference at Bangkok. We need database designer."
                            rate = "Up to ฿12,000" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

        )
    }
}