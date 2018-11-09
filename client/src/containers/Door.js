import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'


class Door extends Component {



  random = () => {
  return Math.floor(Math.random() * 100000)
  }

  render(){
    let rows
    if (this.props.shows !== undefined) {
      rows = this.props.shows.map(show => {
        return <Table.Row key={this.random()}>
                  <Table.Cell>{show.date}</Table.Cell>
                  <Table.Cell>{show.venue}</Table.Cell>
                  <Table.Cell>{show.city}</Table.Cell>
                  <Table.Cell>{show.state}</Table.Cell>
                  <Table.Cell>{show.door_deal}</Table.Cell>
               </Table.Row>
      })
    }
    return(
      <div>
      <Table basic='very'>
       <Table.Header>
         <Table.Row>
           <Table.HeaderCell>Date</Table.HeaderCell>
           <Table.HeaderCell>Venue</Table.HeaderCell>
           <Table.HeaderCell>City</Table.HeaderCell>
           <Table.HeaderCell>State</Table.HeaderCell>
           <Table.HeaderCell>Payment</Table.HeaderCell>
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
  if (state.shows !== undefined) {
    return {shows: state.shows}
  } else {
    return {}
  }

}

export default connect(mapStateToProps)(Door)
