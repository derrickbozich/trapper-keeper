export function createUser(state){
  return (dispatch) => {
    // dispatch({ type: 'START_ADDING_CATS_REQUEST' });
    return fetch('/api/register', {
      method: 'post',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token'),
        'X-CSRF-Token': getCookie('my_csrf_token')
      },
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(user => dispatch({ type: 'LOG_IN', payload: user }) );
  };
}

export function logInUser(state){
  return (dispatch) => {
    // dispatch({ type: 'START_ADDING_CATS_REQUEST' });
    return fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token'),
        'X-CSRF-Token': getCookie('my_csrf_token')
      },
      credentials: 'same-origin'
    }).then(res => dispatch({ type: 'LOG_IN' }));
  };
}

export function logOutUser(state){
  return (dispatch) => {
    // dispatch({ type: 'START_ADDING_CATS_REQUEST' });
    return fetch('/api/users/logout', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token'),
      },
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(user => dispatch({ type: 'LOG_OUT'}) );
  };
}


export function addItem(state){
  return (dispatch) => {
    // dispatch({ type: 'START_ADDING_CATS_REQUEST' });
    return fetch('/api/items/new', {
      method: 'post',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token'),
        'X-CSRF-Token': getCookie('my_csrf_token')
      },
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(item => dispatch({ type: 'ADD_ITEM', payload: item }) );
  };
}

export function getItems(){
  return dispatch => {
    return fetch('/api/items', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token')
      },
    })
    .then(res => res.json())
    .then(items => dispatch({ type: 'GET_ITEMS', payload: items }));
  }
}

export function getItem(id){
  return dispatch => {
    return fetch(`/api/items/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token')
      },
    })
    .then(res => res.json())
    .then(item => dispatch({ type: 'ADD_EDIT_ITEM', payload: item }));
  }
}

export function editItem(state){
  return (dispatch) => {
    return fetch('/api/items/:id/edit', {
      method: 'PATCH',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token'),
        'X-CSRF-Token': getCookie('my_csrf_token')
      },
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(item => dispatch({ type: 'EDIT_ITEM', payload: item }) );
  };
}

export function deleteItem(state){
  return (dispatch) => {
    return fetch('/api/items/:id/delete', {
      method: 'DELETE',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token'),
        'X-CSRF-Token': getCookie('my_csrf_token')
      },
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(item => dispatch({ type: 'DELETE_ITEM', payload: item }) );
  };
}


export function addExpense(state){
  return (dispatch) => {
    return fetch('/api/expenses/new', {
      method: 'post',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token'),
        'X-CSRF-Token': getCookie('my_csrf_token')
      },
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(expense => dispatch({ type: 'ADD_EXPENSE', payload: expense }) );
  };
}

export function editExpense(state){
  return (dispatch) => {
    return fetch('/api/expenses/:id/edit', {
      method: 'PATCH',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token'),
        'X-CSRF-Token': getCookie('my_csrf_token')
      },
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(expense => dispatch({ type: 'EDIT_EXPENSE', payload: expense }) );
  };
}

export function deleteExpense(state){
  return (dispatch) => {
    return fetch('/api/expenses/:id/delete', {
      method: 'DELETE',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token'),
        'X-CSRF-Token': getCookie('my_csrf_token')
      },
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(expense => dispatch({ type: 'DELETE_EXPENSE', payload: expense }) );
  };
}

export function editShow(state){
  return (dispatch) => {
    return fetch('/api/shows/:id/edit', {
      method: 'PATCH',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token'),
        'X-CSRF-Token': getCookie('my_csrf_token')
      },
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(show => dispatch({ type: 'EDIT_SHOW', payload: show }) );
  };
}

export function deleteShow(state){
  return (dispatch) => {
    return fetch('/api/shows/:id/delete', {
      method: 'DELETE',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token'),
        'X-CSRF-Token': getCookie('my_csrf_token')
      },
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(show => dispatch({ type: 'DELETE_SHOW', payload: show }) );
  };
}



export function addShow(state){
  return (dispatch) => {
    return fetch('/api/shows/new', {
      method: 'post',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token'),
        'X-CSRF-Token': getCookie('my_csrf_token')
      },
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(show => dispatch({ type: 'ADD_SHOW', payload: show }) );
  };
}

export function checkoutCash(state){
  return (dispatch) => {
    return fetch('/api/carts/new/cash', {
      method: 'post',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token'),
        'X-CSRF-Token': getCookie('my_csrf_token')
      },
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(dispatch({ type: 'CHECKOUT'}))
  };
}
export function checkoutCredit(state){
  return (dispatch) => {
    return fetch('/api/carts/new/credit', {
      method: 'post',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
        // 'X-CSRF-Token': Rails.csrfToken()
        'X-CSRF-Token': getCookie('my_csrf_token'),
        'Authorization': getCookie('my_jwt_token')
      },
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(dispatch({ type: 'CHECKOUT'}));
  };
}


export function addItemToCart(item){
  return (dispatch) => {
    return dispatch({ type: 'ADD_ITEM_TO_CART', payload: item });
  }
}



export function toggleEditMode(state){
  return dispatch => {
    return dispatch({ type: 'TOGGLE_EDIT_MODE', payload: state })
  }
}

export function toggleGotData(state){
  return dispatch => {
    return dispatch({ type: 'TOGGLE_GOT_DATA', payload: state})
  }
}


export function getData(){
  return dispatch => {
    return fetch('/api/data', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token')
      },
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(data => dispatch({ type: 'GET_DATA', payload: data }))
    // .then(() => dispatch({ type: 'TOGGLE_GOT_DATA', payload: true}));
  }
}

export function getShows(){
  return dispatch => {
    return fetch('/api/shows', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token')
      },
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(shows => dispatch({ type: 'GET_SHOWS', payload: shows }));
  }
}

export function getShow(id){
  return dispatch => {
    return fetch(`/api/shows/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token')
      },
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(show => dispatch({ type: 'ADD_EDIT_ITEM', payload: show }));
  }
}

export function getExpenses(){
  return dispatch => {
    return fetch('/api/expenses', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token')
      },
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(expenses => dispatch({ type: 'GET_EXPENSES', payload: expenses }));
  }
}

export function getExpense(id){
  return dispatch => {
    return fetch(`/api/expenses/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token')
      },
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(expense => dispatch({ type: 'ADD_EDIT_ITEM', payload: expense }));
  }
}

export function getSales(){
  return dispatch => {
    return fetch('/api/items/sales', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token')
      },
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(sales => dispatch({ type: 'GET_SALES', payload: sales }));
  }
}

export function getTotals(){
  return dispatch => {
    return fetch('/api/totals', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('my_jwt_token')
      },
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(totals => dispatch({ type: 'GET_TOTALS', payload: totals }));
  }
}

export function validJwtToken() {
  return fetch('/api/expenses', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('my_jwt_token')
    },
    credentials: 'same-origin'
  }).then(res => res.json())
    .then(expenses => {
      return expenses[0].id ? true : false
    })
}

export function getCookie(cname){
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}
