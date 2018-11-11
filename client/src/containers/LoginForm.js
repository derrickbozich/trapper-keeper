import React, {Component} from 'react'
import { Button, Form, Grid, Header,  Message, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logInUser } from '../actions/actions'

class LoginForm extends Component{

  state = {
    email: '',
    password: ''
  }

  handleSubmit = e => {
    this.props.logInUser(this.state)
    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = (e, {value}) => {
    this.setState({
      [e.target.id]: value
    })
  }

  handleClick = () => {
    this.context.history.push('/register')
  }
  render(){
    return(
      <div className='login-form'>

        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='top'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='black' textAlign='center'>
              Log In
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
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
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a onClick={this.handleClick}>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}



export default connect(null, { logInUser })(LoginForm)
