import React, { Component } from 'react'

// import { connect } from 'react-redux'
import {  Grid, Menu, Segment } from 'semantic-ui-react'
import MobileExpenses from './MobileExpenses'
import MerchSales from './MerchSales'
import MerchDetail from './MerchDetail'
import MobileDoor from './MobileDoor'
import Totals from './Totals'
import { Link } from 'react-router-dom';

export default class FinancePageMobile extends Component {
  state = { activeItem: 'Expenses' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const items = [
      {name: "Expenses", to:'/Expenses'},
      {name: "Sales", to:'/MerchSales'},
      {name: "Detail", to:'/MerchDetail'},
      {name: "Door", to:'/Door'},
      {name: "Totals", to:'/Totals'}
    ]

    const { activeItem } = this.state

    let view;
    switch (activeItem) {
      case 'Expenses':
        view =  <MobileExpenses history={this.props.history} />
        break;
      case 'Sales':
        view =  <MerchSales history={this.props.history} />
        break;
      case 'Door':
        view =  <MobileDoor history={this.props.history} />
        break;
      case 'Totals':
        view =  <Totals history={this.props.history} />
        break;
      case 'Detail':
        view =  <MerchDetail history={this.props.history} />
        break;
      default:
        view = <MerchSales history={this.props.history} />
      }


    return (
      <div>
        <Menu attached='top' tabular widths={5}>
          {items.map(item => {
            return   <Menu.Item name={item.name} active={activeItem === item.name} onClick={this.handleItemClick} />
          })}
        </Menu>
        {view}
      </div>
    )
  }
}
