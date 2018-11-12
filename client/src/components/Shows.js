import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'semantic-ui-react'
import ShowsForm from './ShowsForm'

import Spinner from '../components/Spinner'
import { editShow } from '../actions/actions'
import { toggleEditMode } from '../actions/actions'

class Shows extends Component {

  state = {
    showId: '',
    view: 'shows'
  }


  random = () => {
  return Math.floor(Math.random() * 100000)
  }

  handleClick = (e, { value }) => {
    // this.updateShowId(value)

    // this.setState({showId: value})
    // this.props.toggleEditMode(true)
    // this.props.history.push(`/shows/${value}/edit`)
    this.setState({view: 'editShow', showId: value})

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
    // }

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

export default connect(mapStateToProps, { editShow, toggleEditMode })(Shows)
