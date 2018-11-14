import React, { Component } from 'react';
import { connect } from 'react-redux'

class Total extends Component {

  calcItem = (collection, item) => {
    let total = 0;
    collection.forEach(thing => {
      let amount = thing[item]
      total += amount
    })
    return total
  }

  getTotals = () => {
    const grossDoor = calcItem(this.props.shows, "door_deal");
    const grossMerch = calcItem(this.props.sales, "total");
    const grossIncome = grossDoor + grossMerch;
    const expenses = calcItem(this.props.expenses, "amount");
    const merchFees = calcItem(this.props.sales, "wholesale_total");
    const squareTotal = calcItem(this.props.sales, "square_total");
    const agentFees = grossDoor * 0.1;
    const netDoor = grossDoor - agentFees;
    const netMerch = grossMerch - merchFees - squareTotal;
    const netIncome = netDoor + netMerch - expenses

    return {
      gross_merch: grossMerch,
      net_merch: netMerch,
      wholesale_total: merchFees,
      square_total: squareTotal,
      gross_door: grossDoor,
      net_door: netDoor,
      booking_fee: agentFees,
      gross_income: grossIncome,
      expenses: expenses,
      net_income: netIncome
    }
  }
}

const mapStateToProps = state => {
  return {
    items:state.data.items,
    expenses: state.data.expenses,
    sales: state.data.sales,
    shows: state.data.shows,
    totals: state.data.totals,
    carts: state.data.carts
  }

  render(){
    return{this.getTotals()}
  }
}

// export default connect(mapStateToProps, {getItems, getExpenses, getSales })(Totals);
export default connect(mapStateToProps)(Total);
