import React, { Component } from 'react'
import { Button, Segment, Table } from 'semantic-ui-react'
// import CartItem from './CartItem'
import { connect } from 'react-redux'
import { checkoutCash } from '../actions/actions'
import { checkoutCredit } from '../actions/actions'
import { getSales } from '../actions/actions'
import { getData } from '../actions/actions'
import { setDataLoading } from '../actions/actions'
import { updateSales } from '../actions/actions'
// import { setLoadingSales } from '../actions/actions'
import { renderTotals } from '../actions/actions'
import { random } from '../common'

class Checkout extends Component {

  // date = () => {
  //   let d = new Date()
  //   return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
  // }

  // calcTotals = (sale, cart, payment_type) => {
  //   let total = 0 ;
  //   let wholesale_total = 0;
  //   let square_total = 0;
  //   let updatedSale
  //   if (sale.sold_items_count !== undefined) {
  //     updatedSale = {...sale}
  //   } else {
  //     let sold_items_count = []
  //     this.props.items.forEach(item => sold_items_count.push(0))
  //     updatedSale = {...sale, sold_items_count: sold_items_count, total: 0, wholesale_total: 0, square_total: 0}
  //   }
  //   cart.forEach(item => {
  //     total += item.price
  //     wholesale_total += item.wholesale_price
  //     let itemIndex = this.props.items.indexOf(item)
  //     updatedSale.sold_items_count[itemIndex] ++
  //   })
  //
  //   payment_type === "cash" ? square_total = 0 : square_total = total * 0.0275
  //   updatedSale.total += total;
  //   updatedSale.wholesale_total += wholesale_total;
  //   updatedSale.square_total += square_total;
  //   updatedSale.square_total = parseFloat(updatedSale.square_total.toFixed(2), 10)
  //
  //   return updatedSale
  // }

  // updateSales = (sales, cart, payment_type) => {
  //   let dates = []
  //   sales.forEach(sale => dates.push(sale.date) )
  //   const currentDate = this.date()
  //   const dateMatch = dates.find(date => date === currentDate)
  //   if (dateMatch !== undefined) {
  //     const sale = sales.find(sale => sale.date === dateMatch)
  //     let updatedSale = this.calcTotals(sale, cart, payment_type)
  //     // let date = updatedSale.date
  //     const index =  dates.indexOf(updatedSale.date)
  //     sales[index] = updatedSale
  //     this.props.updateSales(sales)
  //   } else {
  //     let sale = {date: this.date()}
  //     let updatedSale = this.calcTotals(sale, cart, payment_type)
  //     this.props.updateSales([...sales, updatedSale])
  //   }
  // }

  handleClickCash = (e, value) => {
    const cart = this.props.currentCart;
    this.props.checkoutCash(cart);
    // this.props.getData();

    // this.updateSales(this.props.sales, cart, "cash")
    // const data = this.props.data
    // this.props.renderTotals(data)
    // this.props.getSales();

    // this.props.setLoading();

    this.props.history.push('/finances')
  }

  handleClickCredit = (e, value) => {
    const cart = this.props.currentCart
    this.props.checkoutCredit(cart)
    // this.updateSales(this.props.sales, cart, "credit")
    // const data = this.props.data
    // this.props.renderTotals(data)
    this.props.history.push('/finances')
  }

  render(){
    let items
    let total = 0;
    if (this.props.currentCart.length !== 0) {
      items = this.props.currentCart.map(item => <Table.Row><Table.Cell key={random()}>{item.name}</Table.Cell></Table.Row>)
      this.props.currentCart.forEach(item => total += item.price)
    }






    return (
      <div>
        <Segment basic textAlign='center'>

          <h1>Total</h1>
          <h1>${total}</h1>

          <Table basic='very' size='large'>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Cart</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {items}
            </Table.Body>
          </Table>

          <Button onClick={this.handleClickCash} value='cash' secondary>Cash</Button>
          <Button onClick={this.handleClickCredit} value='credit' secondary>Card</Button>

        </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => {

  const data = state.data.details
  let currentCart
  let sales
  let items

  try{
    currentCart = state.currentCart;
    sales = data.sales;
    items = data.items;

  } catch(err) {
    currentCart = [];
    sales = undefined;
    items = undefined;
  }

  return {
    currentCart: currentCart,
    sales: sales,
    items: items
  }
}

export default connect(mapStateToProps, { checkoutCash, getData, checkoutCredit, getSales, updateSales, renderTotals, setDataLoading })(Checkout)
