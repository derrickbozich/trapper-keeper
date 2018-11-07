import React from 'react'

import { connect } from 'react-redux'
import {  Button } from 'semantic-ui-react'
import Checkout from './Checkout'
import ItemsList from './ItemsList'


class FinancePage extends React.Component {

  state = {

  }

  handleClick = () => {

  }

  render(){

      return(
        <div>
          {view}
          <Button onClick={this.handleClick} fluid secondary content="Checkout" />
        </div>
      )
  }
}

export default FinancePage
