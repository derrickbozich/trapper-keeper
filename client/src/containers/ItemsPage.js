import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import ItemsList from '../components/ItemsList'
import { editItem } from '../actions/actions'



class ItemsPage extends React.Component {




  render(){
    // let items;
    // if (this.props.items.length !== 0) {
    //   items = this.props.items.map(item => {
    //     return <Item key={item.id} item={item} />
    //   })
    // } else {
    //   console.log("no items")
    // }
    return(
      <div>
        <ItemsList buttonContent="edit" editItem={this.props.editItem} />

      </div>
    )
  }

}

// const mapStateToProps = state => {
//   if (state.items !== undefined) {
//       console.log("in itemsPage, mapping state to props" + JSON.stringify(state.items))
//     return {
//       items: state.items,
//     }
//   } else {
//     return {}
//   }
// }

export default connect(null, { editItem })(ItemsPage)
