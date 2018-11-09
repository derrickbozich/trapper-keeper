import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { getExpenses } from '../actions/actions'

class Expenses extends Component {

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
               </Table.Row>
      })
    }
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

const mapStateToProps = state =>{
  if (state.expenses !== undefined) {
    return {expenses: state.expenses}
  } else {
    return {}
  }

}

export default connect(mapStateToProps, { getExpenses })(Expenses)
