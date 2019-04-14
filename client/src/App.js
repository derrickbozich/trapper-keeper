import React, { Component } from 'react';
import ItemForm from './containers/ItemForm'
import ExpensesForm from './containers/ExpensesForm'
import ShowsForm from './containers/ShowsForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Recaptcha from 'react-recaptcha'
// import ShoppingPage from './components/ShoppingPage'
// import ItemsPage from './containers/ItemsPage'
// import FinancePage from './containers/FinancePage'
// import ShowsPage from './containers/ShowsPage'
import LoginForm from './containers/LoginForm'
import SignUpForm from './containers/SignUpForm'
// import ImageUpload from './containers/ImageUpload'
// import Checkout from './components/Checkout'
import NavBar from './components/NavTest'
import InitialNavBar from './components/InitialNavBar'
import { connect } from 'react-redux'
// import { getItems, getExpenses, getSales} from './actions/actions'
import { getData } from './actions/actions'
import { toggleGotData } from './actions/actions'
import { getCookie } from './actions/actions'
import { validJwtToken } from './actions/actions'
import { logInUser } from './actions/actions'
import { autoLogin } from './actions/actions'
import { logOutUser } from './actions/actions'
import { routes } from './common'
import { fakeRoutes } from './common'
import { rightItems } from './common'
import { loggedInRightItems } from './common'
import { loggedInMobileRightItems } from './common'
import { mobileRightItems } from './common'
import { leftItems } from './common'
import { loggedInLeftItems } from './common'


class App extends Component {

  // {this.props.loggedIn ? <NavBar rightItems={rightItems} leftItems={leftItems} /> : <InitialNavBar /> }

componentDidMount(){
  if (getCookie('my_jwt_token') !== '') {
    this.props.autoLogin()
  }
}


  render() {
    if (this.props.loggedIn) {
      return (
        <Router> 
          <div>
            <NavBar rightItems={loggedInRightItems} mobileRightItems={loggedInMobileRightItems} leftItems={loggedInLeftItems} loggedIn={this.props.loggedIn} logOutUser={this.props.logOutUser} />
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

    } else {
      return (
        <Router>
          <div>
            <NavBar rightItems={rightItems} mobileRightItems={mobileRightItems} leftItems={leftItems} loggedIn={this.props.loggedIn} logOutUser={this.props.logOutUser} />
            {fakeRoutes.map(({path, component}) => {
              return <Route key={Math.random()*100000}exact path={path} component={component} />
            })}
          </div>
        </Router>
      );

    }

  }
}

const mapStateToProps = state => {
    return {
      loggedIn: state.global.loggedIn,
      gotData: state.global.gotData
    }
}
export default connect(mapStateToProps, { getData, toggleGotData, logInUser, autoLogin, logOutUser  })(App);
