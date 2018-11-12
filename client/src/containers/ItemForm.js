import React,{Component} from 'react'
// import { addItem } from '../Client'
import { connect } from 'react-redux'
import { addItem } from '../actions/actions'
import { getItems } from '../actions/actions'
import { toggleEditMode } from '../actions/actions'
import { deleteItem } from '../actions/actions'
import { Button, Form, Segment, Dropdown} from 'semantic-ui-react'


class ItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.name || '',
      price: props.price || '',
      wholesale_price: props.wholesale_price || '',
      kind: props.kind || '',
      touched: {
          name: false,
          price: false,
          wholesale_price: false,
          kind: false
        }
    }
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

  validate = (name, price, wholesale_price, kind) => {
    return {
      name:  name.length === 0,
      price: price.length === 0,
      wholesale_price: wholesale_price.length === 0,
      kind: kind.length === 0
    };
  }


  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    const error = this.validate(this.state.name, this.state.price, this.state.wholesale_price, this.state.kind)
    const keys = Object.keys(this.state)
    let readyToSubmit = true;
    for (let i = 0; i < keys.length - 1; i++){
      if (error[keys[i]] === true) {
        readyToSubmit = false
      }
    }
    if (readyToSubmit) {
      e.preventDefault()
      if (this.props.editItem) {
        const id = this.props.item.id
        const newState = {...this.state, id}
        this.props.toggleEditMode(false)
        this.props.editItem(newState)
        .then(() => this.props.getItems())
      } else {
        this.props.addItem(this.state)
        .then(() => this.props.getItems())
        this.props.history.push('/sales/new')
        this.setState({
          name:'',
          price:'',
          wholesale_price:'',
          kind:''
        })
      }
    }
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
    const errors = this.validate(this.state.name, this.state.price, this.state.wholesale_price, this.state.kind);
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    };
    return(
      <Form className="ui form" onSubmit={this.handleSubmit}>
        <Segment stacked>
          <div className="field">
            <label>Name</label>
            <Form.Input type="text"
                   id="name"
                   name="item[name]"
                   placeholder="Item Name"
                   value={this.state.name}
                   onChange={this.handleChange}
                   className={shouldMarkError('name') ? "error" : ""}
                   onBlur={this.handleBlur('name')}
                    />
          </div>

          <div className="field">
            <label>Price</label>
            <Form.Input type="text"
                   id="price"
                   name="item[price]"
                   placeholder="Price"
                   value={this.state.price}
                   onChange={this.handleChange}
                   className={shouldMarkError('price') ? "error" : ""}
                   onBlur={this.handleBlur('price')}
                   />
          </div>

          <div className="field">
            <label>Wholesale Price</label>
            <Form.Input type="text"
                        id="wholesale_price"
                        name="item[wholesale_price]"
                        placeholder="Wholesale Price"
                        value={this.state.wholesale_price}
                        onChange={this.handleChange}
                        className={shouldMarkError('wholesale_price') ? "error" : ""}
                        onBlur={this.handleBlur('wholesale_price')}
                         />
          </div>

          <div className="field">
            <label>Style</label>
            <Form.Input type="text"
                        id="kind"
                        name="item[kind]"
                        placeholder="Type"
                        value={this.state.kind}
                        onChange={this.handleChange}
                        className={shouldMarkError('kind') ? "error" : ""}
                        onBlur={this.handleBlur('kind')}
                         />
          </div>

          <Button className="ui button" type="submit">{this.props.inEditMode ? "Submit Changes" : "Submit"}</Button>
          <Button style={this.props.inEditMode ? {display: 'true'} : {display: 'none'}}
                  className="ui button" onClick={this.handleDelete}>Delete</Button>
        </Segment>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {inEditMode: state.global.inEditMode}
}


export default connect(mapStateToProps,{ addItem, getItems, toggleEditMode, deleteItem })(ItemForm)
