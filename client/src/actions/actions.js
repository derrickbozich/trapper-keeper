

export function addItem(state){
  return (dispatch) => {
    // dispatch({ type: 'START_ADDING_CATS_REQUEST' });
    return fetch('/api/items/new', {
      method: 'post',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
        // 'X-CSRF-Token': Rails.csrfToken()
        'X-CSRF-Token': getCookie('my_csrf_token')
      },
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(item => dispatch({ type: 'ADD_ITEM', payload: item }) );
  };
}

export function addExpense(state){
  return (dispatch) => {
    return fetch('/api/expenses/new', {
      method: 'post',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
        // 'X-CSRF-Token': Rails.csrfToken()
        'X-CSRF-Token': getCookie('my_csrf_token')
      },
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(expense => dispatch({ type: 'ADD_EXPENSE', payload: expense }) );
  };
}

export function getItems(){
  return dispatch => {
    return fetch('/api/items')
    .then(res => res.json())
    .then(items => dispatch({ type: 'GET_ITEMS', payload: items }));
  }
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
