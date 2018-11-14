import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { logOutUser } from '../actions/actions'
import { logInUser } from '../actions/actions'




class InitialNavBar extends Component {

  // state = {
  //   loggedIn: this.props.loggedIn
  // }

  handleClick = () => {

    if (this.props.loggedIn) {
      this.props.logOutUser()
      // this.props.history.push('/')
    } else {
      // this.props.logInUser()
      // this.props.history.push('/users/login')
    }
  }



  render(){
    return(
      <div className="ui secondary  menu">

        <Link className="item" to="/register" >Register</Link>
        <Link className="item" to="/users/login" >Login</Link>

        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>

          <a className="ui item" onClick={this.handleClick}>
            {this.props.loggedIn ? "Logout" : "Login"}
          </a>
      </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {loggedIn: state.global.loggedIn}
}

export default connect(mapStateToProps, { logOutUser, logInUser })(InitialNavBar)
