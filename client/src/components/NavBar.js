import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
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

      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>

        <a className="ui item">
          Logout
        </a>
    </div>
    </div>
  )
}

export default NavBar
