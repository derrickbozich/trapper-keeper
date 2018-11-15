import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react'
import { logOutUser } from '../actions/actions'
import { validJwtToken } from '../actions/actions'



class NavBar extends Component {
  handleClick = () => {

    if (this.props.loggedIn) {
      this.props.logOutUser()
      // this.props.history.push('/')
    } else {
      // this.props.history.push('/users/login')
    }


  }
  render(){
    return(
      <Menu horizontal="true">
        <Dropdown item text='Shows'>
          <Dropdown.Menu>
            <Dropdown.Item><Link className="item" to="/shows" >Shows</Link></Dropdown.Item>
            <Dropdown.Item><Link className="item" to="/shows/new" >Add a Show</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Merch">
          <Dropdown.Menu>
            <Dropdown.Item><Link className="item" to="/sales/new" > New Sale </Link></Dropdown.Item>
            <Dropdown.Item><Link className="item" to="/items/new" >New Item</Link></Dropdown.Item>
            <Dropdown.Item><Link className="item" to="/items" >Items</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Finances">
          <Dropdown.Menu>
            <Dropdown.Item><Link className="item" to="/expenses/new" > New Expense</Link></Dropdown.Item>
            <Dropdown.Item><Link className="item" to="/finances" >Finances</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Login/Logout/SignUp">
          <Dropdown.Menu>
            <Dropdown.Item><Link className="item" to="/register" >Register</Link></Dropdown.Item>
            <Dropdown.Item><Link className="item" to="/users/login" >Login</Link></Dropdown.Item>
            <Dropdown.Item><Link className="item" to="/items" >Items</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>














    )
  }

}

const mapStateToProps = state => {
  return {loggedIn: state.global.loggedIn}
}

export default connect(mapStateToProps, { logOutUser })(NavBar)
