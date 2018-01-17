import React, { Component } from 'react'
import {BrowserRouter as Router ,NavLink} from "react-router-dom";
import {
  Button,
  Container,
 Segment,
  Header,
  Icon,
  Form,
  List,
  Divider,
} from 'semantic-ui-react'

const type = [
    { key: 'prog', text: 'Programming', value: 'programming' },
    { key: 'video', text: 'Music&Video', value: 'video' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'marketing', text: 'Marketing', value: 'marketing' },
    { key: 'writer', text: 'Writer', value: 'writer' },
    { key: 'staff', text: 'Staff', value: 'staff' },
    { key: 'etc', text: 'ETC', value: 'etc' },
]

export default class CreateWork extends Component{
    state = {}
    handleChange = (e, { value }) => this.setState({ value })

    render(){
        const { value } = this.state

        return(
            <Segment style={{ paddingTop:'2rem' }} vertical >
                <Container textAlign='center'>
                    <Header as='h2' icon>
                        <Icon name='edit' color={'grey'} />
                        Create a Project
                        <Header.Subheader>
                            Need Freelancer For Support Your Projects.
                        </Header.Subheader>
                    </Header>
                </Container>
                <br/>

                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input label='Project Title' placeholder='Project Title' />
                         <Form.Input label='Price Rate' placeholder='Haring Rate' />
                          <Form.Select label='Type' options={type} placeholder='Project Type' />
                    </Form.Group>
                    <Form.TextArea label='Project Discription'
                                   placeholder='Tell more about your project...' />

                     <Divider horizontal>Contact Information</Divider>
                    <Form.Group widths='equal'>
                        <Form.Input id='form-subcomponent-shorthand-input-first-name'
                                    label='First name' placeholder='First name' />
                        <Form.Input id='form-subcomponent-shorthand-input-last-name'
                                    label='Last name' placeholder='Last name' />
                    </Form.Group>

                    <Form.Group inline>
                        <label>Gender</label>
                        <Form.Radio label='Male' value='m' checked={value === 'm'} onChange={this.handleChange} />
                        <Form.Radio label='Female' value='fm' checked={value === 'fm'} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.TextArea label='Address'/>

                    <Form.Group widths='equal'>
                        <Form.Input id='form-subcomponent-shorthand-input-phone'
                                    label='Phone Number' placeholder='eg.+66x-xxx-xxxx' />
                        <Form.Input id='form-subcomponent-shorthand-input-email'
                                    label='E-mail' placeholder='example@freelanize.com' />

                    </Form.Group>


                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Form.Button>Submit</Form.Button>
                </Form>


            </Segment>
        )
    }
}