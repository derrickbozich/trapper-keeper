import React, { Component } from 'react';
import ItemForm from './containers/ItemForm'
import ExpensesForm from './containers/ExpensesForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShoppingPage from './components/ShoppingPage'
import FinancePage from './containers/FinancePage'
import Checkout from './components/Checkout'
import NavBar from './components/NavBar'
import { connect } from 'react-redux'
import { getItems, getExpenses } from './actions/actions'


class App extends Component {

  componentWillMount(){
    this.props.getItems()
    this.props.getExpenses()

  }

  render() {

    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path='/items/new' component={ItemForm}/>
          <Route exact path='/expenses/new' component={ExpensesForm}/>
          <Route exact path='/sales/new' component={ShoppingPage}/>
          <Route exact path='/checkout' component={Checkout}/>
          <Route exact path='/finances' component={FinancePage}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {getItems, getExpenses})(App);
