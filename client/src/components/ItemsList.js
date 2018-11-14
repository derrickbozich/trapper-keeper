import React from 'react'
import Item from './Item'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'




class ItemsList extends React.Component {

  componentWillReceiveProps(nextProps) {


 this.setState({items : nextProps.items})
 console.log("in component will receive props" + JSON.stringify(this.state) );
}

  render(){
    let items;
    if (this.props.items.length !== 0) {
      items = this.props.items.map(item => {
        return <Item id={item.id} history={this.props.history} buttonContent={this.props.buttonContent} key={item.id} item={item} />
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
  return {
    items: state.items,
  }
}

export default connect(mapStateToProps)(ItemsList)
