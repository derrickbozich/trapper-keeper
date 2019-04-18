export function globalReducer(state={inEditMode: false, loggedIn: false, gotData: false, editItem: {}}, action){
  switch (action.type) {
    case 'TOGGLE_EDIT_MODE':
      action.payload ? console.log('In Edit Mode') : console.log('Out of Edit Mode')
      return {...state, inEditMode: action.payload}
    case 'TOGGLE_GOT_DATA':
      action.payload ? console.log('FETCHING DATA') : console.log('gotData:false')
      return {...state, gotData: action.payload}
    case 'LOG_IN':
      return {...state,loggedIn: true}
    case 'ADD_EDIT_ITEM':
      return {...state, editItem: action.payload}
    case 'LOG_OUT':
      return {...state, loggedIn: false}
    case 'SET_LOADING':
      return {...state, loading: true}
    case 'DONE_LOADING':
      return {...state, loading: false}


    default:
      return state
  }
}
