import React, {Component} from 'react'
import { Button, Form, Grid, Header,  Message, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createUser } from '../actions/actions'

class SignUpForm extends Component{

  state = {
    name: '',
    email: '',
    password: '',
    touched: {
        name: false,
        email: false,
        password: false,
      }
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

  validate = (name, email, password) => {
    return {
      name:  name.length === 0,
      email: email.length === 0,
      password: password.length === 0,
    };
  }

  handleSubmit = e => {
    const error = this.validate(this.state.name, this.state.email, this.state.password)
    const keys = Object.keys(this.state)
    delete keys.touched
    let readyToSubmit = true;
    for (let i = 0; i < keys.length; i++){
      if (error[keys[i]] === true) {
        readyToSubmit = false
      }
    }
    if (readyToSubmit) {
      this.props.createUser(this.state)
      this.props.history.push('/finances')
      this.setState({
        name: '',
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
  render(){
    const errors = this.validate(this.state.name, this.state.email, this.state.password);
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    };
    return(
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='top'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='black' textAlign='center'>
              Sign Up
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input fluid icon='user'
                                  id='name'
                                  iconPosition='left'
                                  placeholder='Band Name'
                                  name='user[name]'
                                  value={this.state.name}
                                  onChange={this.handleChange}
                                  className={shouldMarkError('name') ? "error" : ""}
                                  onBlur={this.handleBlur('name')}
                                  />
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
                <Form.Input fluid icon='lock'
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
                  SignUp
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}



export default connect(null, { createUser })(SignUpForm)
