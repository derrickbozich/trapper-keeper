import React from 'react'

// import { connect } from 'react-redux'
import {  Grid, Menu, Segment, Responsive } from 'semantic-ui-react'
import Expenses from './Expenses'
import MerchSales from './MerchSales'
import MerchDetail from './MerchDetail'
import Door from './Door'
import Totals from './Totals'
import FinancePageDesktop from './FinancePageDesktop'
import FinancePageMobile from './FinancePageMobile'


class FinancePage extends React.Component {


  render(){
    return(
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <FinancePageMobile history={this.props.history} ></FinancePageMobile >
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <FinancePageDesktop history={this.props.history} ></FinancePageDesktop >
        </Responsive>
      </div>


    )


  }
}

export default FinancePage
