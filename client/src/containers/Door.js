import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'semantic-ui-react'
import ShowsForm from './ShowsForm'
import { editShow } from '../actions/actions'
import { deleteShow } from '../actions/actions'
import { toggleEditMode } from '../actions/actions'


class Door extends Component {

  state = {
    inEditMode: false
  }

  random = () => {
  return Math.floor(Math.random() * 100000)
  }

  handleClick = (e, { value }) => {
    this.setState({
      showId: value
    })
    this.props.toggleEditMode(true)
  }

  render(){

    if (this.props.inEditMode) {
      const show = this.props.shows.find(show => show.id == this.state.showId)
      return(
        <ShowsForm id={this.state.showId}
                   date={show.date}
                   venue={show.venue}
                   city={show.city}
                   state={show.state}
                   door_deal={show.door_deal}
                   editShow={this.props.editShow}
                   deleteShow={this.props.deleteShow}

                   />
      )

    } else {
      let rows
      if (this.props.shows !== undefined) {
        rows = this.props.shows.map(show => {
          return <Table.Row key={this.random()}>
                    <Table.Cell>{show.date}</Table.Cell>
                    <Table.Cell>{show.venue}</Table.Cell>
                    <Table.Cell>{show.city}</Table.Cell>
                    <Table.Cell>{show.state}</Table.Cell>
                    <Table.Cell>{show.door_deal}</Table.Cell>
                    <Table.Cell><Button content="Edit" onClick={this.handleClick} value={show.id} /></Table.Cell>

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
  if (state.shows !== undefined) {
    return {
      shows: state.shows,
      inEditMode: state.global.inEditMode
    }
  } else {
    return {}
  }

}

export default connect(mapStateToProps, { editShow, deleteShow, toggleEditMode })(Door)
