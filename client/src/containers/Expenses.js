import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Table, Button, Segment } from 'semantic-ui-react'
import { getExpenses } from '../actions/actions'
import { getExpense } from '../actions/actions'
import { editExpense } from '../actions/actions'
import { toggleEditMode } from '../actions/actions'
import ExpensesForm from './ExpensesForm'
import MyTable from '../components/MyTable'

class Expenses extends Component {

  handleClick = (e, {value }) => {
    this.props.getExpense(value)
    this.props.history.push(`/expenses/${value}/edit`)
  }

  state = {
    inEditMode: false,
    expenseId: ''
  }

  random = () => {
  return Math.floor(Math.random() * 100000)
  }

  render(){
    const headers = ["Kind", "Description", "Amount", "Date", "Payment Type"]
    const rows = this.props.expenses

    return <MyTable headers={headers} rows={rows} />
  }
}

const mapStateToProps = state =>{
  return {expenses: state.expenses}
}

export default connect(mapStateToProps, { getExpenses, getExpense, editExpense, toggleEditMode })(Expenses)
