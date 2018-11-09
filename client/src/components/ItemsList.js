import React from 'react'
import Item from './Item'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'



class ItemsList extends React.Component {

//   componentWillReceiveProps(nextProps) {
//
//
//  this.setState({items : nextProps.items})
//  console.log("in component will receive props" + JSON.stringify(this.state) );
// }
//
// state = {
//   items: this.props.items
// }


  render(){
    let items;
    if (this.props.items.length !== 0) {
      items = this.props.items.map(item => {
        return <Item key={item.id} item={item} />
      })
    } else {
      console.log("no items")
    }
    return(
      <div>
        <Card.Group >
          {items}
        </Card.Group>

      </div>
    )
  }

}

const mapStateToProps = state => {
  if (state.items !== undefined) {
      console.log("in itemsList, mapping state to props" + JSON.stringify(state.items))
    return {
      items: state.items,
    }
  } else {
    return {}
  }
}

export default connect(mapStateToProps)(ItemsList)
