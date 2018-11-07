import React, { Component } from 'react'
import { List, Button } from 'semantic-ui-react'
import MiniCartItem from './MiniCartItem'
import { connect } from 'react-redux'

class MiniCart extends Component {


  render(){
    let items
    if (this.props.items !== undefined) {
      items = this.props.items.map(item => <MiniCartItem key={Math.floor(Math.random()*10000)} item={item} />)
    }
    return (
      <div>
        <h1>Cart</h1>
        <List>
          {items}
        </List>
        <Button href="/checkout" secondary fluid>Checkout</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  if (state.cart !== undefined) {
    return {
      items: state.cart,
    }
  } else {
    return {}
  }
}

export default connect(mapStateToProps)(MiniCart)
