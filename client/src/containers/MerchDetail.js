import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Table, Segment } from 'semantic-ui-react'
import { getSales } from '../actions/actions'

// import { uuid } from 'uuid'

class MerchDetail extends Component {




  random = () => {
  return Math.floor(Math.random() * 10000000)
  }


  render(){
    // An array that all row data is going to be put into
    let rowsData = []
    // go through all sales and create a custom array that contains Date
    // and the sell count ex. ['11/12/2018', 3, 3, 2]
    // this will make it easier to map rows from later
    const generateRowData = () => {
      if (this.props.sales !== null && this.props.sales !== undefined) {
        this.props.sales.forEach(sale => {
          let row = []
          row.push(sale.date)
          sale.sold_items_count.forEach(sellCount => {
            return row.push(sellCount)
          })
          rowsData.push(row)
        })
      }
    }

    // take rowsData and map them into rows of components
    const generateRows = () => {
      generateRowData()
      let r = rowsData
      let rows = r.map(row => {
        let data = row.map(r => {
          return <Table.Cell key={this.random()}>{r}</Table.Cell>
        })
        return <Table.Row key={this.random()}>{data}</Table.Row>
      })
      return rows
    }

    // store rows componet into a variable
    let rows;
    let p = this.props.sales
    if (this.props.sales !== null && this.props.sales !== undefined ) {
      rows = generateRows()
    }


    let headers
    if (this.props.items !== undefined) {
      headers = this.props.items.map(item => {
        return(
            <Table.HeaderCell key={this.random()}>{item.name}</Table.HeaderCell>
        )
      })
    }
    return(
      <div>
      <Segment>
        <Table basic='very' unstackable fixedHeader={false} style={{ width: "auto", tableLayout: "auto" }}>
         <Table.Header>
           <Table.Row>
           <Table.HeaderCell>Date</Table.HeaderCell>
             {headers}
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

const mapStateToProps = state => {
  console.log("MerchDetail mapStateToProps")
  return {
    sales: state.sales,
    items: state.items
  }
}

export default connect(mapStateToProps, { getSales })(MerchDetail)
