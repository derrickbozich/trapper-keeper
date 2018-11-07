import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'

class Expenses extends Component {

  render(){
    let rows
    if (this.props.expenses !== undefined) {
      rows = this.props.expenses.map(expense => {
        return <Table.Row>
                  <Table.HeaderCell>{expense.date}</Table.HeaderCell>
                  <Table.HeaderCell>{expense.kind}</Table.HeaderCell>
                  <Table.HeaderCell>{expense.description}</Table.HeaderCell>
                  <Table.HeaderCell>{expense.amount}</Table.HeaderCell>
                  <Table.HeaderCell>{expense.payment_type}</Table.HeaderCell>
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

export default connect(mapStateToProps)(Expenses)
