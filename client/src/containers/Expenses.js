import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'semantic-ui-react'
import { getExpenses } from '../actions/actions'
import { editExpense } from '../actions/actions'
import { toggleEditMode } from '../actions/actions'
import ExpensesForm from './ExpensesForm'

class Expenses extends Component {

  handleClick = e => {
    this.setState({
      expenseId: e.target.value
    })
    this.props.toggleEditMode(true)
  }

  state = {
    inEditMode: false,
    expenseId: ''
  }

  random = () => {
  return Math.floor(Math.random() * 100000)
  }

  render(){
    let rows
    if (this.props.expenses !== undefined) {
      rows = this.props.expenses.map(expense => {
        return <Table.Row key={this.random()}>
                  <Table.Cell>{expense.date}</Table.Cell>
                  <Table.Cell>{expense.kind}</Table.Cell>
                  <Table.Cell>{expense.description}</Table.Cell>
                  <Table.Cell>{expense.amount}</Table.Cell>
                  <Table.Cell>{expense.payment_type}</Table.Cell>
                  <Table.Cell><Button content="Edit" onClick={this.handleClick}  value={expense.id} /></Table.Cell>
               </Table.Row>
      })
    }
    if (this.props.inEditMode) {
      const expense = this.props.expenses.find(expense => {
        return  expense.id == this.state.expenseId
      })
      return(
        <div>
          <h3>Edit Expense</h3>
          <ExpensesForm description={expense.description}
                        amount={expense.amount}
                        date={expense.date}
                        payment_type={ expense.payment_type}
                        kind={expense.kind}
                        editExpense={this.props.editExpense}
                        id={this.state.expenseId}
                        />
        </div>
      )

    } else {
      return(
        <div>
        <Table basic='very'>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell>Date</Table.HeaderCell>
             <Table.HeaderCell>Type</Table.HeaderCell>
             <Table.HeaderCell>Description</Table.HeaderCell>
             <Table.HeaderCell>Amount</Table.HeaderCell>
             <Table.HeaderCell>Payment Type</Table.HeaderCell>
             <Table.HeaderCell>Edit</Table.HeaderCell>
           </Table.Row>
         </Table.Header>

         <Table.Body>
          {rows}
         </Table.Body>
        </Table>
        </div>
      )
    }

  }
}

const mapStateToProps = state =>{
  if (state.expenses !== undefined) {
    return {
      expenses: state.expenses,
      inEditMode: state.global.inEditMode
    }
  } else {
    return {}
  }

}

export default connect(mapStateToProps, { getExpenses, editExpense, toggleEditMode })(Expenses)
