import React, { Component } from 'react'
import { List, Button } from 'semantic-ui-react'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import { checkout } from '../actions/actions'

class Checkout extends Component {

  handleClick = () => {
    this.props.checkout(this.props.cart)
    this.props.history.push('/')
  }

  render(){
    let items
    let total = 0;
    if (this.props.cart !== undefined) {
      items = this.props.cart.map(item => <CartItem key={Math.floor(Math.random()*10000)} item={item} />)
      this.props.cart.forEach(item => total += item.price)
    }


    return (
      <div>
        <h1>Total</h1>
        <h1>{total}</h1>
        <h1>Cart</h1>
        <List>
          {items}
        </List>
        <Button onClick={this.handleClick} secondary>Cash</Button>
        <Button onClick={this.handleClick} secondary>Card</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  if (state.cart !== undefined) {
    return {
      cart: state.cart,
    }
  } else {
    return {}
  }
}

export default connect(mapStateToProps, { checkout })(Checkout)
