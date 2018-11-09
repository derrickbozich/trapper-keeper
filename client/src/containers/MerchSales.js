import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { getSales } from '../actions/actions'

// import { uuid } from 'uuid'

class MerchSales extends Component {



  random = () => {
  return Math.floor(Math.random() * 10000000)
  }

  render(){
    let rows
    if (this.props.sales !== undefined) {
      rows = this.props.sales.map(sale => {
        return <Table.Row key={this.random()}>
                  <Table.Cell >{sale.date} </Table.Cell>
                  <Table.Cell>{sale.total}</Table.Cell>
                  <Table.Cell>{sale.wholesale_total}</Table.Cell>
                  <Table.Cell>{sale.square_total} </Table.Cell>
                  <Table.Cell>{sale.total - sale.wholesale_total - sale.square_total}</Table.Cell>
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
  if (state.sales.length !== 0) {
    return {sales: state.sales}
  } else {
    return {}
  }
}



export default connect(mapStateToProps, { getSales })(MerchSales)
