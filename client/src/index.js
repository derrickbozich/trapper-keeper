import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import './index.css';

import './semantic/dist/semantic.min.css';

const middleware = [thunk];



// const configureStoreAsync = () => {
//  return new Promise((resolve, reject) => {
//    let initialState = {};//default initial store state
//
//        //do some async stuff here to manipulate initial state...like read from local disk etc.
//        fetch('/api/data')
//        .then(res => res.json())
//        .then(data => {debugger});
//        debugger
//        //This is again wrapped in its own Promises.
//        if (initialState) {
//          debugger
//          const store = createStore(rootReducer, initialState, compose(
//              applyMiddleware(...middleware),
//              window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//            )
//          )
//
//          resolve(store);
//        } else {
//          reject(Error("It broke"));
//        }
//
//  });
// }



// configureStoreAsync().then(store => {
//   return ReactDOM.render(
//    <Provider store={store}>
//      <App store={store}/>
//    </Provider>,
//    document.getElementById('root'));
// })





// this.configureStoreAsync().then(initialState => {
//   const store = createStore(rootReducer, initialState, compose(
//       applyMiddleware(...middleware),
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   )
//   return ReactDOM.render(
//     <Provider store={store}>
//       <App store={store}/>
//     </Provider>,
//     document.getElementById('root'));
// });





const store = createStore(rootReducer, {}, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

// const store = createStore(rootReducer, applyMiddleware(thunk));





ReactDOM.render(

    <Provider store={store} >
      <App />
    </Provider>
  , document.getElementById('root')
)
