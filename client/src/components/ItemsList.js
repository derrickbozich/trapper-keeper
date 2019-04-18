import React from 'react'
// import Item from './Item'
import { connect } from 'react-redux'
import { addItemToCart } from '../actions/actions'
import { getItem } from '../actions/actions'
import { random } from '../common'
import { Card, Segment, Button } from 'semantic-ui-react'

class ItemsList extends React.Component {

  componentWillReceiveProps(nextProps) {
   this.setState({items : nextProps.items})
   console.log("in component will receive props" + JSON.stringify(this.state) );
  }

  handleClick = (e, { value }) => {
    if (this.props.buttonContent === 'edit') {
      this.props.getItem(value)
      this.props.history.push(`/items/${value}/edit`)
    } else {
      const item = this.props.items.find(item => item.id === value)
      this.props.addItemToCart(item)
    }
  }

  render(){
    let items;
    if (this.props.items.length !== 0) {
      items = this.props.items.map(item => {
        return <Card key={random()} style={{ maxWidth: 250 }}>
                  <Card.Content >
                    <Card.Header textAlign='center'>{item.name}</Card.Header>
                    <Card.Description textAlign='center'>{item.kind}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="center aligned segment bottom">
                      <Button onClick={this.handleClick} content={this.props.buttonContent} value={item.id} secondary />
                    </div>
                  </Card.Content>
               </Card>
      })
    } else {
      console.log("no items")
    }

    return(
      <div>
        <Segment basic >
          <Card.Group itemsPerRow={2} >
            {items}
          </Card.Group>
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
  }
}

export default connect(mapStateToProps, { addItemToCart, getItem })(ItemsList)
