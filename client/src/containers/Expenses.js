import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Table, Button, Segment } from 'semantic-ui-react'
import { getExpenses } from '../actions/actions'
import { getExpense } from '../actions/actions'
import { getData } from '../actions/actions'
import { editExpense } from '../actions/actions'
import { toggleEditMode } from '../actions/actions'
import { random } from '../common'
// import ExpensesForm from './ExpensesForm'
// import MyTable from '../components/MyTable'
// import { Link } from 'react-router-dom';


class Expenses extends Component {

  componentDidMount(){

      this.props.getData();

  }

  handleClick = (e, {value }) => {
    this.props.getExpense(value)
    this.props.history.push(`/expenses/${value}/edit`)
  }

  handleButton = (e, {value }) => {
    this.props.history.push(`/expenses/new`)
  }

  state = {
    inEditMode: false,
    expenseId: ''
  }

  render(){

    let rows
    if (this.props.expenses !== undefined) {
      rows = this.props.expenses.map(expense => {
        return <Table.Row key={random()}>
                  <Table.Cell >{expense.date} </Table.Cell>
                  <Table.Cell>{expense.kind}</Table.Cell>
                  <Table.Cell>{expense.description}</Table.Cell>
                  <Table.Cell>${expense.amount}</Table.Cell>
                  <Table.Cell>{expense.payment_type}</Table.Cell>
                  <Table.Cell><Button onClick={this.handleClick} value={expense.id} content="edit" /></Table.Cell>

               </Table.Row>
      })
    }
    return(
      <div>
      <Segment basic>
      <Table basic='very' unstackable fixedheader='false' style={{ width: "auto", tableLayout: "auto" }} >
       <Table.Header>
         <Table.Row>
           <Table.HeaderCell>Date</Table.HeaderCell>
           <Table.HeaderCell>Kind</Table.HeaderCell>
           <Table.HeaderCell>Description</Table.HeaderCell>
           <Table.HeaderCell>Amount</Table.HeaderCell>
           <Table.HeaderCell>Payment Type</Table.HeaderCell>
           <Table.HeaderCell>Edit</Table.HeaderCell>
           <Table.HeaderCell><Button basic secondary onClick={this.handleButton} content="New Expense"></Button></Table.HeaderCell>

         </Table.Row>
       </Table.Header>

       <Table.Body>
        {rows}
       </Table.Body>
      </Table>
      </Segment>
      </div>


    )

  }
}

const mapStateToProps = state =>{
 const data = state.data.details
 let expenses

 try{
   expenses = data.expenses;
 } catch(err) {
   expenses = undefined;
 }

 return {
   expenses: expenses,
 }
}

export default connect(mapStateToProps, { getExpenses, getExpense, editExpense, toggleEditMode, getData })(Expenses)
