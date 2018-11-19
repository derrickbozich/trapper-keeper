import React,{Component} from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/actions'
import { getItems } from '../actions/actions'
import { editItem } from '../actions/actions'
import { toggleEditMode } from '../actions/actions'
import { deleteItem } from '../actions/actions'
import { getCookie } from '../actions/actions'
import { Button, Form, Segment, Dropdown, Header} from 'semantic-ui-react'


class ItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.name || '',
      price: props.price || '',
      wholesale_price: props.wholesale_price || '',
      kind: props.kind || '',
      inEditMode: false,
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
    delete keys.touched
    let readyToSubmit = true;
    for (let i = 0; i < keys.length; i++){
      if (error[keys[i]] === true) {
        readyToSubmit = false
      }
    }
    if (readyToSubmit) {
      e.preventDefault()
      if (this.state.inEditMode) {
        const id = this.props.id
        const newState = {...this.state, id}
        delete newState.touched
        delete newState.inEditMode
        this.props.editItem(newState)
        // .then(() => this.props.getItems())
        this.props.history.push('/items')
      } else {
        this.props.addItem(this.state)
        // .then(() => this.props.getItems())
        this.props.history.push('/items')
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
    this.props.deleteItem(newState)
    .then(() => this.props.getItems())
    this.props.history.push('/items')
  }

  componentWillReceiveProps(nextProps){

    if (nextProps.match.params.id) {
      let item = fetch(`/api/items/${nextProps.match.params.id}`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getCookie('my_jwt_token')
        },
        credentials: 'same-origin'
      })
        .then(res => res.json())
        .then(item => item).then(item => {
          console.log("in items form componentWillReceiveProps fetch")
          this.setState({
            name: item.name || '',
            price: item.price || '',
            wholesale_price: item.wholesale_price || '',
            kind: item.kind || '',
            inEditMode: true
          })
        })
    }
  }

  render(){
    const errors = this.validate(this.state.name, this.state.price, this.state.wholesale_price, this.state.kind);
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      try {
        let shouldShow = this.state.touched[field];
        return hasError ? shouldShow : false;
      } catch (e) {
        let shouldShow = true;
        return hasError ? shouldShow : false;
        console.log(e)
      }
    };
    return(
      <div>
        <Segment basic>
        <Header as="h1" content="Item Form" ></Header>
        <Form className="ui form" onSubmit={this.handleSubmit} >
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

            <Button className="ui button" type="submit">{this.state.inEditMode ? "Submit Changes" : "Submit"}</Button>
            <Button className="ui button" onClick={this.handleDelete}>Delete</Button>
          </Segment>
        </Form>
        </Segment>

      </div>

    )
  }
}

const mapStateToProps = state => {
  if (state.global.editItem) {
    return {
      item: state.global.editItem,
      id: state.global.editItem.id,
    }
  } else {
    return {}
  }
}


export default connect(mapStateToProps,{ addItem, getItems, toggleEditMode, deleteItem, editItem })(ItemForm)
