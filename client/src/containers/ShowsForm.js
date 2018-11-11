import React,{Component} from 'react'
import { connect } from 'react-redux'
import { addShow } from '../actions/actions'
import { Button, Form, Segment, Dropdown} from 'semantic-ui-react'


import { getShows } from '../actions/actions'
import { getTotals } from '../actions/actions'
import { deleteShow } from '../actions/actions'
import { editShow } from '../actions/actions'
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
      state: props.state || '',
      touched: {
          venue: false,
          city: false,
          date: false,
          door_deal: false,
          state: false
        }
    }
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

  validate = (venue, city, date, door_deal, state) => {
    return {
      venue:  venue.length === 0,
      city: city.length === 0,
      date: date.length === 0,
      door_deal: door_deal.length === 0,
      state: state.length === 0
    };
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
    this.props.getTotals()
  }

  handleSubmit = e => {
    e.preventDefault()
    const error = this.validate(this.state.venue, this.state.city, this.state.date, this.state.door_deal, this.state.state )
    const keys = Object.keys(this.state)
    let readyToSubmit = true;
    for (let i = 0; i < keys.length - 1; i++){
      if (error[keys[i]] === true) {
        readyToSubmit = false
      }
    }
    if (readyToSubmit) {
      if (this.props.inEditMode) {
        const id = this.props.id
        const newState = {...this.state,id}
        this.props.toggleEditMode(false)
        this.props.editShow(newState)
      } else {
        this.props.addShow(this.state)
        this.props.getTotals()
        this.props.history.push('/finances')
      }
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
    const errors = this.validate(this.state.venue, this.state.city, this.state.date, this.state.door_deal, this.state.state );
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    };
    return(
      <Form className="ui form" onSubmit={this.handleSubmit}>
        <Segment stacked>
        <div className="field">
          <label>Date</label>
          <Form.Input type="text"
                 id="date"
                 name="show[date]"
                 placeholder="Date"
                 value={this.state.date}
                 onChange={this.handleChange}
                 className={shouldMarkError('date') ? "error" : ""}
                 onBlur={this.handleBlur('date')}
                  />
        </div>

        <div className="field">
          <label>Venue</label>
          <Form.Input type="text"
                 id="venue"
                 name="show[venue]"
                 placeholder="Venue"
                 value={this.state.venue}
                 onChange={this.handleChange}
                 className={shouldMarkError('venue') ? "error" : ""}
                 onBlur={this.handleBlur('venue')}
                 />
        </div>

        <div className="field">
          <label>City</label>
          <Form.Input type="text"
                 id="city"
                 name="show[city]"
                 placeholder="City"
                 value={this.state.city}
                 onChange={this.handleChange}
                 className={shouldMarkError('city') ? "error" : ""}
                 onBlur={this.handleBlur('city')}
                 />
        </div>

        <div className="field">
          <label>State</label>
          <Dropdown fluid search selection
                    placeholder='State'
                    id='state'
                    name="show[state]"
                    onChange={this.handleSelect}
                    options={stateOptions}
                    className={shouldMarkError('state') ? "error" : ""}
                    onBlur={this.handleBlur('state')}
                     />
        </div>

        <div className="field">
          <label>Door Deal</label>
          <Form.Input type="text"
                 placeholder='Door Deal'
                 name="show[door_deal]"
                 id='door_deal'
                 value={this.state.door_deal}
                 onChange={this.handleChange}
                 className={shouldMarkError('door_deal') ? "error" : ""}
                 onBlur={this.handleBlur('door_deal')}
                 />
        </div>
        <Button className="ui button" type="submit">{this.props.inEditMode ? 'Submit Changes' : 'Submit'}</Button>
        <Button style={this.props.inEditMode? {display: 'true'} : {display: 'none'}}
                className="ui button" onClick={this.handleDelete}>Delete</Button>
        </Segment>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {inEditMode: state.global.inEditMode}
}

export default connect(mapStateToProps,{ addShow, getShows, editShow, toggleEditMode, deleteShow, getTotals })(ShowsForm)
