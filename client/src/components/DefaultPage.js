import React from 'react'
import LoginForm from '../containers/LoginForm'
import { Header, Segment } from 'semantic-ui-react'

const DefaultPage = () => {
  return (
    <div>
      <Segment basic textAlign='center'>
        <Header as='h2' content="Please login to access this page" />
        <LoginForm />
      </Segment>
    </div>
  )
}

export default DefaultPage
