import React, { Component } from 'react';
import ItemForm from './containers/ItemForm'
import ExpensesForm from './containers/ExpensesForm'
import ShowsForm from './containers/ShowsForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShoppingPage from './components/ShoppingPage'
import ItemsPage from './containers/ItemsPage'
import FinancePage from './containers/FinancePage'
import ShowsPage from './containers/ShowsPage'
import LoginForm from './containers/LoginForm'
import SignUpForm from './containers/SignUpForm'
import Checkout from './components/Checkout'
import NavBar from './components/NavBar'
import { connect } from 'react-redux'
// import { getItems, getExpenses, getSales} from './actions/actions'
import { getData } from './actions/actions'
import { toggleGotData } from './actions/actions'
// import { getCookie } from './actions/actions'
import { logInUser } from './actions/actions'


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
    // const cookie = getCookie('my_jwt_cookie')
    // if (cookie !== '' && !this.props.gotData) {
    //   this.props.getData()
    //   this.props.toggleGotData(true)
    // }
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
          <Route exact path='/register' component={SignUpForm}/>
          <Route exact path='/users/login' component={LoginForm}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  if (state.data.length === 0) {
    return {
      loggedIn: state.global.loggedIn,
      gotData: state.global.gotData
    }
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
export default connect(mapStateToProps, { getData, toggleGotData, logInUser  })(App);
