import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { logOutUser } from '../actions/actions'
import { validJwtToken } from '../actions/actions'



class NavBar extends Component {
  handleClick = () => {
    if (validJwtToken()) {
      this.props.logOutUser()
      // this.props.context.history.push('/')
    } else {
      // this.props.context.history.push('/users/login')
    }

  }
  render(){
    return(
      <div className="ui secondary  menu">
        <Link className="item" to="/" >Home</Link>
        <Link className="item" to="/sales/new" > New Sale </Link>
        <Link className="item" to="/items/new" >New Item</Link>
        <Link className="item" to="/expenses/new" >New Expense</Link>
        <Link className="item" to="/finances" >Finances</Link>
        <Link className="item" to="/shows/new" >Add a Show</Link>
        <Link className="item" to="/items" >Items</Link>
        <Link className="item" to="/shows" >Shows</Link>
        <Link className="item" to="/register" >Register</Link>
        <Link className="item" to="/users/login" >Login</Link>
        <Link className="item" to="/uploads" >Image Upload</Link>

        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>

          <a className="ui item" onClick={this.handleClick}>
            {validJwtToken() ? "Logout" : "Login"}
          </a>
      </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {loggedIn: state.global.loggedIn}
}

export default connect(mapStateToProps, { logOutUser })(NavBar)
