import React,{Component} from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../actions/actions'
import { getTotals } from '../actions/actions'
import { getExpenses } from '../actions/actions'
import { deleteExpense } from '../actions/actions'
import { toggleEditMode } from '../actions/actions'
import { Dropdown } from 'semantic-ui-react'
// import { Form, Checkbox } from 'semantic-ui-react'
import PropTypes from 'prop-types';

import { expenseOptions } from '../common'
import { paymentTypes } from '../common'
// stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]



class ExpensesForm extends Component {
  date = () => {
    const d = new Date();
    const date = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`
    return date
  }
  constructor(props) {
    super(props);
    this.state = {
      description: props.description || '',
      amount: props.amount || '',
      date: this.date(),
      payment_type: props.payment_type || '',
      kind: props.kind || ''
    }
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
    const newState = {...this.state, id}
    this.props.toggleEditMode(false)
    this.props.deleteExpense(newState)
    this.props.getTotals()
    this.props.getExpenses()
  }



  handleSubmit = e => {
    e.preventDefault()
    if (this.props.editExpense) {
      const id = this.props.id
      const newState = {...this.state, id}
      this.props.toggleEditMode(false)
      this.props.editExpense(newState)
    } else {
      this.props.addExpense(this.state)
      this.props.history.push('/finances')
    }
    this.props.getTotals()
    this.props.getExpenses()

    this.setState({
      description:'',
      amount:'',
      date:this.date(),
      payment_type:'',
      kind:''
    })
  }

  render(){
    return(
      <form className="ui form" onSubmit={this.handleSubmit}>

        <div className="field">
          <label>Kind</label>
          <Dropdown placeholder='Kind' id='kind' name="expense[kind]"  onChange={this.handleSelect}fluid search selection options={expenseOptions} />
        </div>

        <div className="field">
          <label>Description</label>
          <input type="text" id="description" name="expense[description]" placeholder="Description" value={this.state.description} onChange={this.handleChange} />
        </div>

        <div className="field">
          <label>Amount</label>
          <input type="text" id="amount" name="expense[amount]" placeholder="Amount" value={this.state.amount} onChange={this.handleChange} />
        </div>

        <div className="field">
          <label>Date</label>
          <input type="text" id="date" name="expense[date]" placeholder={this.date()} value={this.state.date} onChange={this.handleChange} />
        </div>

        <div className="field">
          <label>Payment Type</label>
          <Dropdown placeholder='Payment Type' name="expense[payment_type]" id='payment_type'  onChange={this.handleSelect}fluid search selection options={paymentTypes} />
        </div>
        <button className="ui button" type="submit">{this.props.inEditMode ? "Submit Changes" : "Submit"}</button>
        <button style={this.props.inEditMode ? {display: 'true'} : {display: 'none'}}
                className="ui button" onClick={this.handleDelete}>Delete</button>
      </form>
    )
  }
}


const mapStateToProps = state => {
  return {inEditMode: state.global.inEditMode}
}


export default connect(mapStateToProps,{ addExpense, getTotals, getExpenses, toggleEditMode, deleteExpense })(ExpensesForm)
