import React, { Component } from 'react'
import { List } from 'semantic-ui-react'


const CartItem = props => {

  return (
    <div>
      <List.Item icon='users' content={props.item.name} />
    </div>
  )
}

export default CartItem
