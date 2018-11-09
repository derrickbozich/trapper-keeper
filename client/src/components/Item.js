import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { addItemToCart } from '../actions/actions'
import { connect } from 'react-redux'
import ItemForm from '../containers/ItemForm'


class Item extends Component {

  state = {
    inEditMode: false
  }

  handleClick = e => {
    if (this.props.editItem) {
      this.setState({
        inEditMode: true
      })
    } else {
      this.props.addItemToCart(this.props.item)
    }

    // alert(`${this.props.item.name} was added to the cart!`)
  }
  render(){
    // let item = this.props.items.find(item => item.id == this.props.id)

    if (this.state.inEditMode) {
      return <ItemForm item={this.props.item}
                       name={this.props.item.name}
                       price={this.props.item.price}
                       wholesale_price={this.props.item.wholesale_price}
                       kind={this.props.item.kind}
                       editItem={this.props.editItem} />
    } else {
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

}

const mapStateToProps = state => {
  return {items: state.items}
}

export default connect(mapStateToProps, { addItemToCart })(Item)
