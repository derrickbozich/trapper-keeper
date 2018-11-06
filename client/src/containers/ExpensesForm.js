import React,{Component} from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../actions/actions'
import { Dropdown } from 'semantic-ui-react'
import { Form, Checkbox } from 'semantic-ui-react'

import { expenseOptions } from '../common'
import { paymentTypes } from '../common'
// stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]



class ExpensesForm extends Component {
  date = () => {
    const d = new Date();
    return d.getDate()
  }
  state = {
    description:'',
    amount:'',
    date:'',
    paymentType:'',
    type:''
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
    this.props.addExpense(this.state)
    this.setState({
      description:'',
      amount:'',
      date:'',
      paymentType:'',
      type:''
    })
  }

  render(){
    return(
      <form className="ui form" onSubmit={this.handleSubmit}>

        <div className="field">
          <label>Type</label>
          <Dropdown placeholder='Type' id='type' name="expense[type]"  onChange={this.handleSelect}fluid search selection options={expenseOptions} />
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
          <Dropdown placeholder='Payment Type' name="expense[payment_type]" id='paymentType'  onChange={this.handleSelect}fluid search selection options={paymentTypes} />
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    )
  }
}



export default connect(null,{ addExpense })(ExpensesForm)
