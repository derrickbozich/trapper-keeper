import React,{Component} from 'react'
import { connect } from 'react-redux'
import { addShow } from '../actions/actions'
import { Button, Form, Segment, Dropdown} from 'semantic-ui-react'
import { getShows } from '../actions/actions'
import { getTotals } from '../actions/actions'
import { deleteShow } from '../actions/actions'
import { editShow } from '../actions/actions'
import { getCookie } from '../actions/actions'
import { toggleEditMode } from '../actions/actions'


class ShowsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      venue: '',
      city:  '',
      date: this.date(),
      door_deal:  '',
      state:  '',
      inEditMode: false,
      touched: {
          venue: false,
          city: false,
          date: false,
          door_deal: false,
          state: false
        }
    }
  }

  componentWillReceiveProps(nextProps){

    if (nextProps.match.params.id) {
      let show = fetch(`/api/shows/${nextProps.match.params.id}`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getCookie('my_jwt_token')
        },
        credentials: 'same-origin'
      })
        .then(res => res.json())
        .then(show => show).then(show => {
          console.log("in shows form componentWillReceiveProps fetch")
          this.setState({
            venue: show.venue || '',
            city: show.city || '',
            date: show.date || '',
            door_deal: show.door_deal || '',
            state: show.state || '',
            inEditMode: true
          })
        })
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
    this.props.deleteShow(newState)
    this.props.getTotals()
    this.props.history.push('/shows')
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
      if (this.state.inEditMode) {
        const id = this.props.id
        const newState = {...this.state,id}
        this.props.editShow(newState)
        this.props.history.push('/shows')
      } else {
        this.props.addShow(this.state)
        this.props.getTotals()
        this.props.history.push('/shows')
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
          <Form.Input
                    placeholder='State'
                    id='state'
                    name="show[state]"
                    onChange={this.handleSelect}
                    value={this.state.state}
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
        <Button className="ui button" type="submit">{this.state.inEditMode ? 'Submit Changes' : 'Submit'}</Button>
        <Button className="ui button" onClick={this.handleDelete}>Delete</Button>
        </Segment>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  if (state.global.editItem) {
    return {
      show: state.global.editItem,
      id: state.global.editItem.id,
      inEditMode: true
    }
  } else {
    return {}
  }
}

export default connect(mapStateToProps,{ addShow, getShows, editShow, deleteShow, getTotals, toggleEditMode })(ShowsForm)
