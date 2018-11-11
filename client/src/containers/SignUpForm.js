import React, {Component} from 'react'
import { Button, Form, Grid, Header,  Message, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createUser } from '../actions/actions'

class SignUpForm extends Component{

  state = {
    name: '',
    email: '',
    password: ''
  }

  handleSubmit = e => {
    this.props.createUser(this.state)
    this.setState({
      name: '',
      email: '',
      password: ''
    })
  }

  handleChange = (e, {value}) => {
    this.setState({
      [e.target.id]: value
    })

  }
  render(){
    return(
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='top'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='black' textAlign='center'>
              Sign Up
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input fluid icon='user' id='name' iconPosition='left' placeholder='Band Name' name='user[name]' value={this.state.name} onChange={this.handleChange} />
                <Form.Input fluid icon='user' id='email' iconPosition='left' placeholder='E-mail address' name='user[email]' value={this.state.email} onChange={this.handleChange} />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  value={this.state.password}
                  onChange={this.handleChange}
                  name='user[password]'
                  id='password'
                />

                <Button color='black' type='submit' fluid size='large'>
                  SignUp
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href='#'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}



export default connect(null, { createUser })(SignUpForm)
