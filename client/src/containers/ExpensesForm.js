import React,{Component} from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../actions/actions'
import { getTotals } from '../actions/actions'
import { getExpenses } from '../actions/actions'
import { getCookie } from '../actions/actions'
import { deleteExpense } from '../actions/actions'
import { editExpense } from '../actions/actions'
import { toggleEditMode } from '../actions/actions'
import { Button, Form, Segment, Dropdown} from 'semantic-ui-react'
import { expenseOptions } from '../common'
import { paymentTypes } from '../common'



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
      kind: props.kind || '',
      inEditMode: false,
      touched: {
          description: false,
          amount: false,
          date: false,
          payment_type: false,
          kind: false
      }
    }
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

  validate = (description, amount, date, payment_type, kind) => {
    return {
      description:  description.length === 0,
      amount: amount.length === 0,
      date: date.length === 0,
      payment_type: payment_type.length === 0,
      kind: kind.length === 0
    };
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
    this.props.history.push('/finances')
    this.props.deleteExpense(newState)
    // .then(() => this.props.getTotals())
    // .then(() => this.props.getExpenses())


  }

  handleSubmit = e => {
    const error = this.validate(this.state.description, this.state.amount, this.state.date, this.state.payment_type, this.state.kind )
    let readyToSubmit = true;
    let newState = this.state
    delete newState.touched
    delete newState.inEditMode
    const keys = Object.keys(newState)
    for (let i = 0; i < keys.length; i++){
      if (error[keys[i]] === true) {
        readyToSubmit = false
      }
    }
    if (readyToSubmit) {
      const path = this.props.history.location.pathname
      e.preventDefault()
      if (path.includes("edit")) {
        const regex = /\d+/g;
        let m = path.match(regex)


        const id = parseInt(m[0],10)
        const state = {...this.state, id}
        this.props.history.push('/finances')
        this.props.editExpense(state)
        // .then(() => this.props.getTotals())
        // .then(() => this.props.getExpenses())
      } else {
        this.props.addExpense(newState)
        // .then(() => this.props.getTotals())
        // .then(() => this.props.getExpenses())
        this.props.history.push('/finances')
      }


      // this.setState({
      //   description:'',
      //   amount:'',
      //   date:this.date(),
      //   payment_type:'',
      //   kind:''
      // })
    }


  }

  componentWillReceiveProps(nextProps){

    if (nextProps.match.params.id) {
      let item = fetch(`/api/expenses/${nextProps.match.params.id}`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getCookie('my_jwt_token')
        },
        credentials: 'same-origin'
      })
        .then(res => res.json())
        .then(expense => expense).then(expense => {
          console.log("in expenses form componentWillReceiveProps fetch")
          this.setState({
            description: expense.description || '',
            amount: expense.amount || '',
            date: expense.date || '',
            payment_type: expense.payment_type || '',
            kind: expense.kind || '',
            inEditMode: true
          })
        })
    }
  }


  render(){
    const errors = this.validate(this.state.description, this.state.amount, this.state.date, this.state.payment_type, this.state.kind);
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    };
    return(
      <Form className="ui form" onSubmit={this.handleSubmit}>
       <Segment stacked>
        <div className="field">
          <label>Kind</label>
          <Form.Input
                    id='kind'
                    name="expense[kind]"
                    placeholder='Kind'
                    value={this.state.kind}
                    onChange={this.handleChange}
                    className={shouldMarkError('kind') ? "error" : ""}
                    onBlur={this.handleBlur('kind')}
          />
        </div>

        <div className="field">
          <label>Description</label>
          <Form.Input type="text"
                 id="description"
                 name="expense[description]"
                 placeholder="Description"
                 value={this.state.description}
                 onChange={this.handleChange}
                 className={shouldMarkError('description') ? "error" : ""}
                 onBlur={this.handleBlur('description')}

                 />
        </div>

        <div className="field">
          <label>Amount</label>
          <Form.Input type="text"
                 id="amount"
                 name="expense[amount]"
                 placeholder="Amount"
                 value={this.state.amount}
                 onChange={this.handleChange}
                 className={shouldMarkError('amount') ? "error" : ""}
                 onBlur={this.handleBlur('amount')}
                 />
        </div>

        <div className="field">
          <label>Date</label>
          <Form.Input type="text"
                 id="date"
                 name="expense[date]"
                 placeholder={this.date()}
                 value={this.state.date}
                 onChange={this.handleChange}
                 className={shouldMarkError('date') ? "error" : ""}
                 onBlur={this.handleBlur('date')}
                 />
        </div>

        <div className="field">
          <label>Payment Type</label>
          <Dropdown fluid search selection
                    placeholder='Payment Type'
                    name="expense[payment_type]"
                    id='payment_type'
                    onChange={this.handleSelect}
                    options={paymentTypes}
                    className={shouldMarkError('payment_type') ? "error" : ""}
                    onBlur={this.handleBlur('payment_type')}
                    />
        </div>
        <Button className="ui button" type="submit">{this.state.inEditMode ? "Submit Changes" : "Submit"}</Button>
        <Button className="ui button" onClick={this.handleDelete}>Delete</Button>
        </Segment>
      </Form>
    )
  }
}


const mapStateToProps = state => {
  if (state.global.editItem) {
    return {
      expense: state.global.editItem,
      id: state.global.editItem.id,
    }
  } else {
    return {}
  }
}


export default connect(mapStateToProps,{ addExpense, getTotals, getExpenses, toggleEditMode, deleteExpense, editExpense })(ExpensesForm)
