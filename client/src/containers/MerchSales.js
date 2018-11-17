import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Table, Segment } from 'semantic-ui-react'
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
      <Segment basic>
      <Table basic='very' unstackable fixedheader='false' style={{ width: "auto", tableLayout: "auto" }} >
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
      </Segment>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {sales: state.sales}
}



export default connect(mapStateToProps, { getSales })(MerchSales)
