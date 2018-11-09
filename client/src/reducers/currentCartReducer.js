export function currentCartReducer(state=[], action){
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return [...state, action.payload]
    case 'CHECKOUT':
      return []
    default:
      return state
  }
}
