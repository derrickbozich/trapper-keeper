import React, { Component } from 'react';
import ItemForm from './containers/ItemForm'
import ExpensesForm from './containers/ExpensesForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ItemsList from './components/ItemsList'
import NavBar from './components/NavBar'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path='/items/new' component={ItemForm}/>
          <Route exact path='/items' component={ItemsList}/>
          <Route exact path='/expenses/new' component={ExpensesForm}/>
        </div>
      </Router>
    );
  }
}

export default App;
