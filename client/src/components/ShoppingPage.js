import React from 'react'

// import { connect } from 'react-redux'
import {  Button } from 'semantic-ui-react'
import Checkout from './Checkout'
import ItemsList from './ItemsList'


class ShoppingPage extends React.Component {

  state = {
    stillShopping: true
  }

  handleClick = () => {
    if (this.state.stillShopping ) {
      this.props.history.push('/checkout')
      this.setState({stillShopping: false})
    }
  }

  render(){
    let view = this.state.stillShopping ?  <ItemsList /> : <Checkout />
      return(
        <div>
          {view}
          <Button onClick={this.handleClick} fluid secondary content="Checkout" />
        </div>
      )
  }
}

export default ShoppingPage
