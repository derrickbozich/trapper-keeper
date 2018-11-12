import React, { Component } from 'react'
import { List, Button } from 'semantic-ui-react'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import { checkoutCash } from '../actions/actions'
import { checkoutCredit } from '../actions/actions'
import { getSales } from '../actions/actions'

class Checkout extends Component {

  handleClickCash = (e, value) => {
    this.props.checkoutCash(this.props.currentCart)
    .then(() => this.props.getSales())

    this.props.history.push('/finances')
  }

  handleClickCredit = (e, value) => {
    this.props.checkoutCredit(this.props.currentCart)
    .then(() => this.props.getSales())
    this.props.history.push('/finances')
  }

  render(){
    let items
    let total = 0;
    if (this.props.currentCart.length !== 0) {
      items = this.props.currentCart.map(item => <CartItem key={Math.floor(Math.random()*10000)} item={item} />)
      this.props.currentCart.forEach(item => total += item.price)
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
  if (state.currentCart) {
    return {
      currentCart: state.currentCart,
      sales: state.sales
    }
  } else {
    return {}
  }
}

export default connect(mapStateToProps, { checkoutCash, checkoutCredit, getSales })(Checkout)
