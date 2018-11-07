import React from 'react'
import Item from './Item'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'



class ItemsList extends React.Component {


  render(){
    let items;
    if (this.props.items !== undefined) {
      items = this.props.items.map(item => {
        return <Item key={item.id} item={item} />
      })
    }
    return(
      <div>
        <Card.Group itemsPerRow={2}>
          {items}
        </Card.Group>

      </div>
    )
  }

}

const mapStateToProps = state => {
  if (state.items !== undefined) {
    return {
      items: state.items,
    }
  } else {
    return {}
  }
}

export default connect(mapStateToProps)(ItemsList)
