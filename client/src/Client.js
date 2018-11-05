/* eslint-disable no-undef */
// function search(query, cb) {
//   return fetch(`api/food?q=${query}`, {
//     accept: 'application/json',
//   }).then(checkStatus)
//     .then(parseJSON)
//     .then(cb);
// }
//
// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }
//   const error = new Error(`HTTP Error ${response.statusText}`);
//   error.status = response.statusText;
//   error.response = response;
//   console.log(error); // eslint-disable-line no-console
//   throw error;
// }
//
// function parseJSON(response) {
//   return response.json();
// }
//
// const Client = { search };
// export default Client;

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

export function postItem(state){
  fetch('/api/items/new', {
    method: 'post',
    body: JSON.stringify(state),
    headers: {
      'Content-Type': 'application/json',
      // 'X-CSRF-Token': Rails.csrfToken()
      'X-CSRF-Token': getCookie('my_csrf_token')
    },
    credentials: 'same-origin'
  }).then(res => res.json())
  .then(data => { debugger });
}
