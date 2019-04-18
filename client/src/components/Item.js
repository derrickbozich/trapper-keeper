import React, { Component } from 'react'
import { Card, Button, Icon} from 'semantic-ui-react'
import { addItemToCart } from '../actions/actions'
import { deleteItem } from '../actions/actions'
import { toggleEditMode } from '../actions/actions'
import { getItem } from '../actions/actions'
import { connect } from 'react-redux'
// import ItemForm from '../containers/ItemForm'
// import CartModal from './CartModal'

class Item extends Component {

  handleClick = e => {
    if (this.props.buttonContent === 'edit') {
      this.props.getItem(this.props.id)
      this.props.history.push(`/items/${this.props.id}/edit`)
    } else {
      this.props.addItemToCart(this.props.item)
    }
  }

  render(){
      return(
          <div>
            <Card>
              <Icon name="music" />
              <Card.Content>
                <Card.Header>{this.props.item.name}</Card.Header>
                <Card.Description>{this.props.item.kind}</Card.Description>
                <Button onClick={this.handleClick} content={this.props.buttonContent} secondary />
              </Card.Content>
            </Card>
          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, { addItemToCart, deleteItem, toggleEditMode, getItem })(Item)
