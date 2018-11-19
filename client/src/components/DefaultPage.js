import React from 'react'
import LoginForm from '../containers/LoginForm'
import { Header } from 'semantic-ui-react'

const DefaultPage = () => {
  return (
    <div>
      <Header as='h2' content="Please login to access this page" />
      <LoginForm />
    </div>
  )
}

export default DefaultPage
