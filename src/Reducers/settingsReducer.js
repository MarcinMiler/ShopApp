
//setting initial state for reducer
const initialState = {
  filter: '',
  typeSort: '',
  cartPrice: 0
}

const Settings = (state = initialState, action) => {
  switch (action.type) {

    //changing filter
    case 'SET_FILTER':
      return Object.assign({}, state, {filter: action.filter})

      //updating couterPrice
      case 'UPDATE_COUNTER_PRICE':
       let price = parseInt(action.price, 10)
       let newPrice = price + state.cartPrice

       return Object.assign({}, state, {cartPrice: newPrice})

      //changing type of sort
    case 'CHANGE_TYPE_SORT':
      return Object.assign({}, state, {typeSort: action.typeSort})

    default:
      return state
  }

}

export default Settings
