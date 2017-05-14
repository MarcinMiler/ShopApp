
//removing product from id
const removeById = (state = [], id) => {
  const products = state.filter(product => product.id !== id);
  return products;
}

const product = (state = {}, action) => {
  switch (action.type) {
    //add product to cart
    case 'ADD_PRODUCT_TO_CART':
      return {
        title: action.title,
        photo: action.photo,
        price: action.price,
        id: action.id
      }

    default:
      return state

  }
}

const cart = (state = [], action) => {
  let products = null
  switch (action.type) {
    //trigers product reducer
    case 'ADD_PRODUCT_TO_CART':
    return [
      ...state,
      product(undefined, action)
    ]
    //trigers removeById function and deleted from cart
    case 'DELETE_PRODUCT_FROM_CART':
      products = removeById(state, action.id)
      return products

    default:
      return state

  }
}

export default cart
