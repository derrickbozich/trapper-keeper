import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import './index.css';
import './semantic/semantic.min.css';
import {getCookie} from './actions/actions'
const middleware = [thunk];


let store
fetch('/api/data', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': getCookie('my_jwt_token')
  },
  credentials: 'same-origin'
})
.then(res => res.json())
.catch(() => {
  const store = createStore(rootReducer, {}, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
  ReactDOM.render(
      <Provider store={store} >
        <App />
      </Provider>
    , document.getElementById('root')
  )
})
.then(data => {
      store = createStore(rootReducer, data, compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
  return store
}).then(store => {

  return (
    ReactDOM.render(
        <Provider store={store} >
          <App />
        </Provider>
      , document.getElementById('root')
    )
  )
})
