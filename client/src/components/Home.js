import React from 'react'
import LoginForm from '../containers/LoginForm'
import { Header, Segment, List, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <Segment basic>
        <Header as='h2' content="Welcome!" />
        <Header as='h3' content="Manager is an app designed to help musicians keep track of their expenses and income." />
        <Header as='h4' content="You can add and view all expenses and all income from shows and merchandise. There is also a shopping cart feature for making sales at shows." />
        <Header as='h3'> Please <Link to='/register'> create an account </Link> or <Link to='/users/login'> login </Link> to access all of the features of manager </Header>
        <div className="center aligned ">
          <Button secondary size='big'>
            <Link className="white" to='/register'>  Get Started</Link>
            <Icon name='right arrow' />
          </Button>
        </div>
        <Header as='h3'> With manager, you can: </Header>
        <List bulleted size='big'>
          <List.Item >Account for all expenses created through the app</List.Item>
          <List.Item>Track all merch sales</List.Item>
          <List.Item>Track all shows and money made at shows</List.Item>
          <List.Item>See all totals of band finances</List.Item>
        </List>
      </Segment>
    </div>
  )
}

export default Home
