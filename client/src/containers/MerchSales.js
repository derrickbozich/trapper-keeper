import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'

class MerchSales extends Component {

  render(){
    let rows
    if (this.props.expenses !== undefined) {
      rows = this.props.expenses.map(expense => {
        return <Table.Row>
                  <Table.HeaderCell> </Table.HeaderCell>
                  <Table.HeaderCell>The Twin Color</Table.HeaderCell>
                  <Table.HeaderCell>The Twin Black</Table.HeaderCell>
                  <Table.HeaderCell>Nostalgia </Table.HeaderCell>
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
           <Table.HeaderCell>Sales</Table.HeaderCell>
           <Table.HeaderCell>Wholesale Fee</Table.HeaderCell>
           <Table.HeaderCell>Square Fee</Table.HeaderCell>
           <Table.HeaderCell>Net Profit</Table.HeaderCell>
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

export default connect(mapStateToProps)(MerchSales)
