export function dataReducer(state=[], action){
  switch (action.type) {
    case 'GET_DATA':
      return {
        details: action.payload,
        loading: false
      }
      // return action.payload
    case 'SET_DATA_LOADING':
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
