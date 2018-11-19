import React from 'react'
import LoginForm from '../containers/LoginForm'
import { Header, Segment } from 'semantic-ui-react'

const Home = () => {
  return (
    <div>
      <Segment basic>
        <Header as='h2' content="Welcome!" />
      </Segment>
    </div>
  )
}

export default Home
