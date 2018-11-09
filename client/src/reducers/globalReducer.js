export function globalReducer(state={inEditMode: false}, action){
  switch (action.type) {
    case 'TOGGLE_EDIT_MODE':
      action.payload ? console.log('In Edit Mode') : console.log('Out of Edit Mode')
      return {inEditMode: action.payload}
    case 'GET_EDIT_MODE':
      return state
    default:
      return state
  }
}
