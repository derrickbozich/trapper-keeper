import React, { Component } from 'react';
import ItemForm from './containers/ItemForm'
import ExpensesForm from './containers/ExpensesForm'
import ShowsForm from './containers/ShowsForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import ShoppingPage from './components/ShoppingPage'
// import ItemsPage from './containers/ItemsPage'
// import FinancePage from './containers/FinancePage'
// import ShowsPage from './containers/ShowsPage'
// import LoginForm from './containers/LoginForm'
// import SignUpForm from './containers/SignUpForm'
// import ImageUpload from './containers/ImageUpload'
// import Checkout from './components/Checkout'
import NavBar from './components/NavBar'
import { connect } from 'react-redux'
// import { getItems, getExpenses, getSales} from './actions/actions'
import { getData } from './actions/actions'
import { toggleGotData } from './actions/actions'
// import { getCookie } from './actions/actions'
import { validJwtToken } from './actions/actions'
import { logInUser } from './actions/actions'
import { routes } from './common'





class App extends Component {

  componentDidMount(){
    console.log("in App - Component Did Mount")
    if (validJwtToken()) {
      this.props.getData()
    }
  }

  shouldComponentUpdate(){
    const result = validJwtToken()
    if (result && this.props.gotData === false) {
      this.props.getData()
      .then(()=> this.props.toggleGotData(true))
    }
    console.log("in App - should Component Update result: " + result)
    return result ? true : false
  }




  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route path='/shows/:id/edit' component={ShowsForm} />
          <Route path='/items/:id/edit' component={ItemForm} />
          <Route path='/expenses/:id/edit' component={ExpensesForm} />
          <Route path='/expenses/new' component={ExpensesForm} />
          {routes.map(({path, component}) => {
            return <Route key={Math.random()*100000}exact path={path} component={component} />
          })}
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
