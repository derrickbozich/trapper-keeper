import React from 'react'
import Item from './Item'

const ItemsList = props => {
  let items;
  if (props.items !== undefined) {
    items = props.items.map(item => {
      return <Item key={item.id} item={item} />
    })
  }

  return(
    <div>
      {items}
    </div>
  )
}

export default ItemsList
