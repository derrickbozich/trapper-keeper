import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { addItemToCart } from '../actions/actions'
import { connect } from 'react-redux'


class Item extends Component {


  handleClick = e => {
    this.props.addItemToCart(this.props.item)
    // alert(`${this.props.item.name} was added to the cart!`)
  }
  render(){
    return(
        <div>
          <Card>
            <Image src='https://upload.wikimedia.org/wikipedia/en/6/67/Nostalgia_for_Infinity1.jpg' />
            <Card.Content>
              <Card.Header>{this.props.item.name}</Card.Header>
              <Card.Description>{this.props.item.kind}</Card.Description>
            </Card.Content>
             <Button onClick={this.handleClick} content='Add to Cart' secondary />
          </Card>

        </div>
    )
  }

}

export default connect(null, { addItemToCart })(Item)
