import React, { Component } from 'react'
import { List, Button } from 'semantic-ui-react'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import { checkoutCash } from '../actions/actions'
import { checkoutCredit } from '../actions/actions'
import { getSales } from '../actions/actions'
import { updateSales } from '../actions/actions'
import { renderTotals } from '../actions/actions'

class Checkout extends Component {

  date = () => {
    let d = new Date()
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
  }

  calcTotals = (sale, cart, payment_type) => {
    let total = 0 ;
    let wholesale_total = 0;
    let square_total = 0;
    let soldItemsCount = []
    let updatedSale = {...sale}
    cart.forEach(item => {
      total += item.price
      wholesale_total += item.wholesale_price
      let itemIndex = this.props.items.indexOf(item )
      updatedSale.sold_items_count[itemIndex] ++
    })

    payment_type === "cash" ? square_total = 0 : square_total = total * 0.0275
    updatedSale.total += total;
    updatedSale.wholesale_total += wholesale_total;
    updatedSale.square_total += square_total;

    return updatedSale
  }

  updateSales = (sales, cart, payment_type) => {
    let dates = []
    sales.forEach(sale => dates.push(sale.date) )
    const currentDate = this.date()
    const dateMatch = dates.find(date => date === currentDate)
    if (dateMatch !== undefined) {
      const sale = sales.find(sale => sale.date === dateMatch)
      let updatedSale = this.calcTotals(sale, cart, payment_type)
      let date = updatedSale.date
      const index =  dates.indexOf(updatedSale.date)
      sales[index] = updatedSale
      this.props.updateSales(sales)
    } else {
      const sale = {date: this.date()}
      let updatedSale = this.calcTotals(sale, cart, payment_type)
      this.props.updateSales({...sales, updatedSale})
    }
  }

  handleClickCash = (e, value) => {
    const cart = this.props.currentCart
    this.props.checkoutCash(cart)
    this.updateSales(this.props.sales, cart, "cash")
    const data = this.props.data
    this.props.renderTotals(data)
    this.props.history.push('/finances')
  }

  handleClickCredit = (e, value) => {
    const cart = this.props.currentCart
    this.props.checkoutCredit(cart)
    this.updateSales(this.props.sales, cart, "credit")
    const data = this.props.data
    this.props.renderTotals(data)
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
  return {
    data: state,
    currentCart: state.currentCart,
    sales: state.sales,
    items: state.items
  }
}

export default connect(mapStateToProps, { checkoutCash, checkoutCredit, getSales, updateSales, renderTotals })(Checkout)
