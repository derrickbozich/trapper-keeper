import React,{Component} from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../actions/actions'
import { getTotals } from '../actions/actions'
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
  state = {
    description:'',
    amount:'',
    date:this.date(),
    payment_type:'',
    kind:''
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
    this.props.getTotals()
    this.props.history.push('/finances')
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
        <button className="ui button" type="submit">Submit</button>
      </form>
    )
  }
}





export default connect(null,{ addExpense, getTotals })(ExpensesForm)
