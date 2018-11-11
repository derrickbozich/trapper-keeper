export function globalReducer(state={inEditMode: false, loggedIn: false, gotData: false}, action){
  switch (action.type) {
    case 'TOGGLE_EDIT_MODE':
      action.payload ? console.log('In Edit Mode') : console.log('Out of Edit Mode')
      return {inEditMode: action.payload}
    case 'TOGGLE_GOT_DATA':
      action.payload ? console.log('FETCHING DATA') : console.log('gotData:false')
      return {gotData: action.payload}
    case 'LOG_IN':
      return {loggedIn: true}
    case 'LOG_OUT':
      return {loggedIn: false}
    default:
      return state
  }
}
