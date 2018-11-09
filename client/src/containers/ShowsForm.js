import React,{Component} from 'react'
import { connect } from 'react-redux'
import { addShow } from '../actions/actions'
import { Dropdown } from 'semantic-ui-react'

import { getShows } from '../actions/actions'
import { toggleEditMode } from '../actions/actions'
// import { Form, Checkbox } from 'semantic-ui-react'

import { stateOptions } from '../common'

class ShowsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venue: props.venue || '',
      city: props.city || '',
      date: this.date(),
      door_deal: props.door_deal || '',
      state: props.state || ''
    }
  }
  date = () => {
    const d = new Date();
    const date = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`
    return date
  }


  handleChange = e => {

    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSelect = (e, value) => {
    this.setState({
      [value.id]: value.value
    })
  }

  handleDelete = e => {
    e.preventDefault()
    const id = this.props.id
    const newState = {...this.state,id}
    this.props.toggleEditMode(false)
    this.props.deleteShow(newState)
  }



  handleSubmit = e => {
    e.preventDefault()
    if (this.props.editShow) {
      const id = this.props.id
      const newState = {...this.state,id}
      this.props.editShow(newState)
    } else {
      this.props.addShow(this.state)
      this.props.history.push('/finances')
    }

    this.setState({
      venue:'',
      city:'',
      date:this.date(),
      door_deal:'',
      state:''
    })
  }

  render(){
    return(
      <form className="ui form" onSubmit={this.handleSubmit}>

        <div className="field">
          <label>Date</label>
          <input type="text" id="date" name="show[date]" placeholder="Date" value={this.state.date} onChange={this.handleChange} />
        </div>

        <div className="field">
          <label>Venue</label>
          <input type="text" id="venue" name="show[venue]" placeholder="Venue" value={this.state.venue} onChange={this.handleChange} />
        </div>

        <div className="field">
          <label>City</label>
          <input type="text" id="city" name="show[city]" placeholder="City" value={this.state.city} onChange={this.handleChange} />
        </div>

        <div className="field">
          <label>State</label>
          <Dropdown placeholder='State' id='state' name="show[state]"  onChange={this.handleSelect}fluid search selection options={stateOptions} />
        </div>

        <div className="field">
          <label>Door Deal</label>
          <input type="text" placeholder='Door Deal' name="show[door_deal]" id='door_deal' value={this.state.door_deal}  onChange={this.handleChange} />
        </div>
        <button className="ui button" type="submit">{this.props.deleteShow ? 'Submit Changes' : 'Submit'}</button>
        <button style={this.props.deleteShow ? {display: 'true'} : {display: 'none'}}
                className="ui button" onClick={this.handleDelete}>Delete</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {inEditMode: state.global.inEditMode}
}


export default connect(mapStateToProps,{ addShow, getShows, toggleEditMode })(ShowsForm)
