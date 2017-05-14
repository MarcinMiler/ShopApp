
const product = (state = {}, action) => {
  switch (action.type) {

    case 'ADD_PRODUCT':
      return {
        title: action.title,
        photo: action.photo,
        cores: action.cores,
        timing: action.timing,
        cache: action.cache,
        price: action.price,
        id: action.id,
        socket: action.socket
      }

      default:
        return state
  }
}

const products = (state = [], action) => {
  switch (action.type) {
    //trigers product reducer
    case 'ADD_PRODUCT':
      return [
        ...state,
        product(undefined, action)
      ]

    //clearing products from reducer
    case 'CLEAR_PRODUCTS':
      return []

    //sorting products in reducer
    case 'SORT_PRODUCTS':
      switch (action.typeSort) {
        //sorting price from lowest
        case 'min':
          state.sort((a, b) => {
            return parseInt(a.price, 10) - parseInt(b.price, 10);
          })
          return state

        //sorting price from highest
        case 'max':
          state.sort((a, b) => {
            return parseInt(b.price, 10) - parseInt(a.price, 10);
          })
          return state

        //sorting from a to z
        case 'a':
          state.sort((a, b) => {
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
          })
          return state

        //sorting from z to a
        case 'z':
          state.sort((a, b) => {
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();
            if (x > y) {return -1;}
            if (x < y) {return 1;}
            return 0;
          })
        return state

        default:
          return state
    }

    default:
      return state

  }
}

export default products
