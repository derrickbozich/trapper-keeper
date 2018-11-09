import React,{Component} from 'react'
import { connect } from 'react-redux'
import { addShow } from '../actions/actions'
import { Dropdown } from 'semantic-ui-react'
// import { Form, Checkbox } from 'semantic-ui-react'

import { stateOptions } from '../common'




class ShowsForm extends Component {
  date = () => {
    const d = new Date();
    const date = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`
    return date
  }
  state = {
    venue:'',
    city:'',
    date:this.date(),
    door_deal:'',
    state:''
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



  handleSubmit = e => {
    e.preventDefault()
    this.props.addShow(this.state)
    this.props.history.push('/finances')
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
          <input type="text" id="date" name="show[date]" placeholder={this.date()} value={this.state.date} onChange={this.handleChange} />
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
          <input type="text" placeholder='Door Deal' name="show[door_deal]" id='door_deal'  onChange={this.handleChange} />
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    )
  }
}



export default connect(null,{ addShow })(ShowsForm)
