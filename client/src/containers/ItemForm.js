import React,{Component} from 'react'
// import { getCookie } from '../Client'
import { postItem } from '../Client'

export default class ItemForm extends Component {
  state = {
    name:'',
    price:'',
    wholesalePrice:'',
    style:''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }



  handleSubmit = e => {
    e.preventDefault()
    postItem(this.state)
    this.setState({
      name:'',
      price:'',
      wholesalePrice:'',
      style:''
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
          <input type="text" id="wholesalePrice" name="item[wholesalePrice]" placeholder="Wholesale Price" value={this.state.wholesalePrice} onChange={this.handleChange} />
        </div>

        <div className="field">
          <label>Style</label>
          <input type="text" id="style" name="item[style]" placeholder="Style" value={this.state.style} onChange={this.handleChange} />
        </div>

        <button className="ui button" type="submit">Submit</button>
      </form>
    )
  }
}
