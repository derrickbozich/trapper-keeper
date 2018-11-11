import React,{Component} from 'react'
// import { addItem } from '../Client'
import { connect } from 'react-redux'
import { addItem } from '../actions/actions'
import { getItems } from '../actions/actions'
import { toggleEditMode } from '../actions/actions'
import { deleteItem } from '../actions/actions'

class ItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.name || '',
      price: props.price || '',
      wholesale_price: props.wholesale_price || '',
      kind: props.kind || ''
    }
  }


  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.props.editItem) {
      const id = this.props.item.id
      const newState = {...this.state, id}
      this.props.toggleEditMode(false)
      this.props.editItem(newState)

    } else {
      this.props.addItem(this.state)
      this.props.history.push('/sales/new')
      this.setState({
        name:'',
        price:'',
        wholesale_price:'',
        kind:''
      })

    }
    this.props.getItems()
  }

  handleDelete = e => {
    e.preventDefault()
    const id = this.props.item.id
    const newState = {...this.state, id}
    this.props.toggleEditMode(false)
    this.props.deleteItem(newState)
    this.props.getItems()
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


export default connect(mapStateToProps,{ addItem, getItems, toggleEditMode, deleteItem })(ItemForm)
