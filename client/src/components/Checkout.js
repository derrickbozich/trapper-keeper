import React, { Component } from 'react'
import { List, Button } from 'semantic-ui-react'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import { checkoutCash } from '../actions/actions'
import { checkoutCredit } from '../actions/actions'

class Checkout extends Component {

  handleClickCash = (e, value) => {
    const payment_type = value.value

    this.props.checkoutCash(this.props.cart)
    this.props.history.push('/')
  }

  handleClickCredit = (e, value) => {
    const payment_type = value.value

    this.props.checkoutCredit(this.props.cart)
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
        <Button onClick={this.handleClickCash} value='cash' secondary>Cash</Button>
        <Button onClick={this.handleClickCredit} value='credit' secondary>Card</Button>
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

export default connect(mapStateToProps, { checkoutCash, checkoutCredit })(Checkout)
