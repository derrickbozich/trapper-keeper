import React from 'react'

// import { connect } from 'react-redux'
import {  Grid, Menu, Segment } from 'semantic-ui-react'
import Expenses from './Expenses'
import MerchSales from './MerchSales'
import MerchDetail from './MerchDetail'
import Door from './Door'
import Totals from './Totals'


class FinancePage extends React.Component {


  state = { activeItem: 'merchDetail' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state
    let view;
    switch (this.state.activeItem) {
      case 'expenses':
        view =  <Expenses history={this.props.history} />
        break;
      case 'merchSales':
        view =  <MerchSales history={this.props.history} />
        break;
      case 'door':
        view =  <Door history={this.props.history} />
        break;
      case 'totals':
        view =  <Totals history={this.props.history} />
        break;
      case 'merchDetail':
        view =  <MerchDetail history={this.props.history} />
        break;
      default:
        view = <MerchDetail history={this.props.history} />


    }
    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item name='expenses' active={activeItem === 'expenses'} onClick={this.handleItemClick} />
            <Menu.Item name='merchSales' active={activeItem === 'merchSales'} onClick={this.handleItemClick} />
            <Menu.Item name='merchDetail' active={activeItem === 'merchDetail'} onClick={this.handleItemClick} />
            <Menu.Item name='door'active={activeItem === 'door'}onClick={this.handleItemClick}  />
            <Menu.Item name='totals'active={activeItem === 'totals'} onClick={this.handleItemClick}/>
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            {view}
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default FinancePage
