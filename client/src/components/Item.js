import React, { Component } from 'react'
import { Card, Image, Button, Grid, Icon} from 'semantic-ui-react'
import { addItemToCart } from '../actions/actions'
import { deleteItem } from '../actions/actions'
import { toggleEditMode } from '../actions/actions'
import { getItem } from '../actions/actions'

import { connect } from 'react-redux'
import ItemForm from '../containers/ItemForm'


class Item extends Component {


  handleClick = e => {
    if (this.props.buttonContent === 'edit') {
      // this.props.toggleEditMode(true)
      this.props.getItem(this.props.id)
      this.props.history.push(`/items/${this.props.id}/edit`)
    } else {
      this.props.addItemToCart(this.props.item)
    }

    // alert(`${this.props.item.name} was added to the cart!`)
  }
  render(){
    // let item = this.props.items.find(item => item.id == this.props.id)


      return(
          <div>
            <Card>
              <Image src='https://upload.wikimedia.org/wikipedia/en/6/67/Nostalgia_for_Infinity1.jpg' />
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
