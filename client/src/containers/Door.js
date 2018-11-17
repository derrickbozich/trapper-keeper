import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Table, Button, Segment} from 'semantic-ui-react'
import ShowsForm from './ShowsForm'
import Spinner from '../components/Spinner'
import { editShow } from '../actions/actions'
import { getShow } from '../actions/actions'
import { toggleEditMode } from '../actions/actions'
import MyTable from '../components/MyTable'

class Door extends Component {

  state = {
    showId: ''
  }


  random = () => {
  return Math.floor(Math.random() * 100000)
  }

  handleClick = (e, { value }) => {
    // this.props.toggleEditMode(true)
    this.props.getShow(value)
    this.props.history.push(`/shows/${value}/edit`)
  }


  render(){

      const headers = ["Date", "Venue", "City", "State", "Payment"]
      const rows= this.props.shows
      return <MyTable headers={headers} rows={rows} />

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

export default connect(mapStateToProps, { editShow, toggleEditMode, getShow })(Door)
