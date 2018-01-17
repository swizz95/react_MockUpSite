import React, { Component } from 'react'
import Footer from './Footer'
import LinkedIn from './assets/LinkedIn.png'
import {BrowserRouter as Router ,NavLink} from "react-router-dom";
import Search from './Search'
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
  Visibility, Statistic,
} from 'semantic-ui-react'


const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
        <NavLink activeClassName='active' to='/'><Menu.Item as='a' active>Home</Menu.Item></NavLink>
        <NavLink activeClassName='active' to='/services'><Menu.Item as='a' >Services</Menu.Item></NavLink>
        <NavLink activeClassName='active' to='/company'> <Menu.Item as='a'>Company</Menu.Item></NavLink>
        <NavLink activeClassName='active' to='/contact'><Menu.Item as='a'>Contact</Menu.Item></NavLink>

        <Menu.Menu position='right'>
        <Menu.Item className='item'>
           <NavLink activeClassName='active' to='/login'><Button as='a'>Log in</Button></NavLink>
        </Menu.Item>
            <Menu.Item>
                <Button as='a' color='orange'
                  href='https://www.linkedin.com/start/join'
                  target='_blank'
                  >Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default class HomepageLayout extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                  <NavLink activeClassName='active' to='/'> <Menu.Item as='a' active>Home</Menu.Item></NavLink>
                  <NavLink activeClassName='active' to='/services'> <Menu.Item as='a'>Services</Menu.Item></NavLink>
                  <NavLink activeClassName='active' to='/company'><Menu.Item as='a'>Company</Menu.Item></NavLink>
                  <NavLink activeClassName='active' to='/contact'><Menu.Item as='a'>Contact</Menu.Item></NavLink>
                <Menu.Item position='right'>
                    <NavLink activeClassName='active' to='/login'><Button as='a' inverted>Log in</Button></NavLink>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}
                          href='https://www.linkedin.com/start/join' target='_blank'
                  >Sign Up</Button>
                </Menu.Item>
              </Menu>
            </Container>

            <Container text>
              <Header
                as='h1'
                content='Freelanize'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='Find The Trustful Jobs at One Place.'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button href='#work' size='huge' color='orange'>
                Get Started
                <Icon name='right arrow' />
              </Button>
            </Container>
          </Segment>
        </Visibility>

          <Stat/>
          <Highlight />
          <Services/>
          <Footer />

      </div>
    )
  }
}

class Services extends Component{
    render(){
        return(
            <Segment id="work" style={{ padding: '8em 0em' }} vertical >
             <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column floated='left' width={6}>
                  <Image
                      src={LinkedIn}
                      rounded
                  />
              </Grid.Column>
              <Grid.Column floated='right' width={8}>
                <Header as='h3' style={{ fontSize: '2em'  }}>Many Type of Freelances's Jobs are HERE!</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Our system collect trustful jobs in our country for you. We have big companies
                  as partners to serve great things for you and you will find many kind of jobs in our system.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>Project's Owner & Freelancer Supporter System</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, We have a great system for supporting management.
                </p>
                  <Header as='h3' style={{ fontSize: '2em' }}>Pure LinkedIn Account</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Our system using LinkedIn account to get your profile and info.
                    No need to create new account on our system.
                </p>
              </Grid.Column>

            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <NavLink activeClassName='active' to='/login'>
                    <Button size='big' color='orange'>Check Them Out!!</Button>
                </NavLink>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        )
    }
}

class Highlight extends Component{
     render() {
         return (
             <Segment style={{ padding: '2em 0em' }} vertical color='orange'>
                 <Container textAlign='justified'>
                     <Header as='h1' style={{ fontSize: '2em' }}>
                         <Icon size='small' color='grey' name='search'/>
                         Quick Search</Header>
                     <br/><br/>
                     <Search/>
                 </Container>
             </Segment>

         )
     }
}

class Stat extends Component{
     render() {
         return (
             <Segment style={{ padding: '2em', paddingLeft:'43em' }} vertical color='orange'>
                 <Container textAlign='justified'>
                     <Statistic.Group>
                         <Statistic>
                             <Statistic.Value>2,204</Statistic.Value>
                             <Statistic.Label>Views</Statistic.Label>
                         </Statistic>
                         <Statistic>
                             <Statistic.Value>1,004</Statistic.Value>
                             <Statistic.Label>Registered Jobs</Statistic.Label>
                         </Statistic>
                     </Statistic.Group>
                 </Container>
             </Segment>

         )
     }
}

