import React,{Component} from 'react'
// import { addItem } from '../Client'
import { connect } from 'react-redux'
import { addItem } from '../actions/actions'

class ItemForm extends Component {
  state = {
    name:'',
    price:'',
    wholesale_price:'',
    kind:''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    let s = this.state
    this.props.addItem(this.state)
    this.setState({
      name:'',
      price:'',
      wholesale_price:'',
      kind:''
    })
  }

  render(){
    return(
      <form className="ui form" onSubmit={this.handleSubmit}>

        <div className="field">
          <label>Name</label>
          <input type="text" id="name" name="item[name]" placeholder="Item Name" value={this.state.name} onChange={this.handleChange} />
        </div>

        <div className="field">
          <label>Price</label>
          <input type="text" id="price" name="item[price]" placeholder="Price" value={this.state.price} onChange={this.handleChange} />
        </div>

        <div className="field">
          <label>Wholesale Price</label>
          <input type="text" id="wholesale_price" name="item[wholesale_price]" placeholder="Wholesale Price" value={this.state.wholesale_price} onChange={this.handleChange} />
        </div>

        <div className="field">
          <label>Style</label>
          <input type="text" id="kind" name="item[kind]" placeholder="Type" value={this.state.kind} onChange={this.handleChange} />
        </div>

        <button className="ui button" type="submit">Submit</button>
      </form>
    )
  }
}



export default connect(null,{ addItem })(ItemForm)
