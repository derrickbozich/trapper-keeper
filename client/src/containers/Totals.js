import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Table , Segment} from 'semantic-ui-react'
// import { getSales } from '../actions/actions'
// import { getShows } from '../actions/actions'

class Totals extends Component {

  random = () => {
  return Math.floor(Math.random() * 100000)
  }

  render(){

    const totals = this.props.totals
    return(
      <div>
      <Segment>
      <Table basic='very' unstackable fixedHeader={false} style={{ width: "auto", tableLayout: "auto" }}>
      <Table.Header>
      <Table.Row >
         <Table.HeaderCell>Totals</Table.HeaderCell>
         <Table.HeaderCell>Amount</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
       <Table.Body>
        <Table.Row key={this.random()}>
           <Table.Cell>Gross Income</Table.Cell>
           <Table.Cell>${totals.gross_income}</Table.Cell>
        </Table.Row>
        <Table.Row key={this.random()}>
           <Table.Cell>Gross Door</Table.Cell>
           <Table.Cell>${totals.gross_door}</Table.Cell>
        </Table.Row>
        <Table.Row key={this.random()}>
           <Table.Cell>Gross Merch</Table.Cell>
           <Table.Cell>${totals.gross_merch}</Table.Cell>
        </Table.Row>
        <Table.Row key={this.random()}>
           <Table.Cell>Expenses</Table.Cell>
           <Table.Cell>${totals.expenses}</Table.Cell>
        </Table.Row>
        <Table.Row key={this.random()}>
           <Table.Cell>Merchandise Fees</Table.Cell>
           <Table.Cell>${totals.wholesale_total}</Table.Cell>
        </Table.Row>
        <Table.Row key={this.random()}>
           <Table.Cell>Square Fees</Table.Cell>
           <Table.Cell>${totals.square_total}</Table.Cell>
        </Table.Row>
        <Table.Row key={this.random()}>
           <Table.Cell>Booking Agent Fees</Table.Cell>
           <Table.Cell>${totals.booking_fee}</Table.Cell>
        </Table.Row>
        <Table.Row key={this.random()}>
           <Table.Cell>Net Door</Table.Cell>
           <Table.Cell>${totals.net_door}</Table.Cell>
        </Table.Row>
        <Table.Row key={this.random()}>
           <Table.Cell>Net Merch</Table.Cell>
           <Table.Cell>${totals.net_merch}</Table.Cell>
        </Table.Row>
        <Table.Row key={this.random()}>
           <Table.Cell>Net Income</Table.Cell>
           <Table.Cell>${totals.net_income}</Table.Cell>
        </Table.Row>
       </Table.Body>
      </Table>
      </Segment>
      </div>
    )
  }
}

const mapStateToProps = state =>{
 return {totals: state.totals}
}

export default connect(mapStateToProps)(Totals)
