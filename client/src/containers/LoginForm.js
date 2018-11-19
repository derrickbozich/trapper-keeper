import React, {Component} from 'react'
import { Button, Form, Grid, Header,  Message, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logInUser } from '../actions/actions'

class LoginForm extends Component{

  state = {
    email: '',
    password: '',
    touched: {
        email: false,
        password: false,
      }
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

  handleSubmit = e => {
    const error = this.validate(this.state.email, this.state.password)
    const keys = Object.keys(this.state)
    delete keys.touched
    let readyToSubmit = true;
    for (let i = 0; i < keys.length; i++){
      if (error[keys[i]] === true) {
        readyToSubmit = false
      }
    }
    if (readyToSubmit) {
      this.props.logInUser(this.state)
      this.props.history.push('/finances')
      this.setState({
        email: '',
        password: ''
      })
    }
  }

  handleChange = (e, {value}) => {
    this.setState({
      [e.target.id]: value
    })
  }

  handleClick = () => {
    // this.context.history.push('/register')
    this.props.history.push('/register')
  }

  validate = (email, password) => {
    return {
      email: email.length === 0,
      password: password.length === 0,
    };
  }

  render(){
    const errors = this.validate(this.state.email, this.state.password);
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    };
    return(
      <Segment basic>
        <div className='login-form'>
          <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='top'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='black' textAlign='center'>
                Log In
              </Header>
              <Form size='large' onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input fluid icon='user'
                              id='email'
                              iconPosition='left'
                              placeholder='E-mail address'
                              name='user[email]'
                              value={this.state.email}
                              onChange={this.handleChange}
                              className={shouldMarkError('email') ? "error" : ""}
                              onBlur={this.handleBlur('email')}
                               />

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
                    className={shouldMarkError('password') ? "error" : ""}
                    onBlur={this.handleBlur('password')}
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
      </Segment>
    )
  }
}



export default connect(null, { logInUser })(LoginForm)
