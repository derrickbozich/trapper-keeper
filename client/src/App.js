import React, { Component } from 'react';
import ItemForm from './containers/ItemForm'
import ExpensesForm from './containers/ExpensesForm'
import ShowsForm from './containers/ShowsForm'
import { BrowserRouter as Router, Route, Match } from 'react-router-dom';
import ShoppingPage from './components/ShoppingPage'
import ItemsPage from './containers/ItemsPage'
import FinancePage from './containers/FinancePage'
import ShowsPage from './containers/ShowsPage'
import Checkout from './components/Checkout'
import NavBar from './components/NavBar'
import { connect } from 'react-redux'
// import { getItems, getExpenses, getSales} from './actions/actions'
import { getData} from './actions/actions'


class App extends Component {

  // componentWillMount(){
  //   this.props.getItems()
  //   this.props.getExpenses()
  //   this.props.getSales()
  //
  // }
  componentDidMount(){
    console.log("in App - Component Did Mount")
    this.props.getData()
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
          <Route exact path='/shows/new' component={ShowsForm}/>
          <Route exact path='/items' component={ItemsPage}/>
          <Route exact path='/shows' component={ShowsPage}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  if (state.data.length === 0) {
    return {}
  } else {
    console.log('in app, rewriting props')
    state.items = state.data.items
    state.expenses = state.data.expenses
    state.sales = state.data.sales
    state.shows = state.data.shows
    state.totals = state.data.totals
    state.carts = state.data.carts
    state.currentCart = []
    state.data = []
  }

}

// export default connect(mapStateToProps, {getItems, getExpenses, getSales })(App);
export default connect(mapStateToProps, {getData })(App);
