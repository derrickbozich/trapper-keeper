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

  // componentDidMount(){
  //   console.log("in App - Component Did Mount")
  //   if (validJwtToken()) {
  //     this.props.getData()
  //   }
  // }

  // shouldComponentUpdate(){
  //   const result = validJwtToken()
  //   if (result && this.props.gotData === false) {
  //     this.props.getData()
  //     .then(()=> this.props.toggleGotData(true))
  //   }
  //   console.log("in App - should Component Update result: " + result)
  //   return result ? true : false
  // }




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

// const mapStateToProps = state => {
//   return{
//     items:state.data.items,
//     expenses: state.data.expenses,
//     sales: state.data.sales,
//     shows: state.data.shows,
//     totals: state.data.totals,
//     carts: state.data.carts
//
//   }
//
//
// }

// export default connect(mapStateToProps, {getItems, getExpenses, getSales })(App);
export default connect(null, { getData, toggleGotData, logInUser  })(App);
