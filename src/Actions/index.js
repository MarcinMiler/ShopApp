//importing firebase database
import { fireData } from '../firebase'

//setting filter
export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  filter
})

//changing type of sort
export const changeTypeSort = (typeSort) => ({
  type: 'SORT_PRODUCTS',
  typeSort
})

//added product to reducer
export const add = (title, photo, cores, timing, cache, price, id, socket) => ({
  type: 'ADD_PRODUCT',
  title, photo, cores, timing, cache, price, id, socket

})

//added product to Firebase
export const addProductToFirebase = (title, photo, cores, timing, cache, price, id, socket) => {
  return (dispatch) => {
    let p = {
      title, photo, cores, timing, cache, price, id, socket
    }
    fireData.ref(`products/${p.title}`).set(p)
  }
}

//delete product from firebase
export const deleteProductFromFirebase = (title) => {
  return dispatch => {
    fireData.ref('products').child(title).remove();
  }
}

//fetching product from firebase
export const fetchProducts = () => {
  return dispatch => {
    fireData.ref('products').once('value', snapshot => {

      snapshot.forEach(product => {
        const { title, photo, cores, timing, cache, price, id, socket } = product.val()
        dispatch(add(title, photo, cores, timing, cache, price, id, socket))
      })

    })
  }
}

//clearing array of products in reducer
export const clearProducts = () => ({
  type: 'CLEAR_PRODUCTS'
})

//adding product to cart
export const addProductToCart = (title, photo, price, id) => ({
  type: 'ADD_PRODUCT_TO_CART',
  title, photo, price, id
})

//updating couterprice when add or delete product to cart
export const updateCounterPrice = (price) => ({
  type: 'UPDATE_COUNTER_PRICE',
  price
})

//delete product from cart
export const deleteProductFromCart = (id) => ({
  type: 'DELETE_PRODUCT_FROM_CART',
  id
})

//trigers action addProductToCart and updateCounterPrice
export const productToCart = (title, photo, price, id) => {
  return dispatch => {
    dispatch(addProductToCart(title, photo, price, id))
    dispatch(updateCounterPrice(price))
  }
}

//delete product from cart and we must update counterPrice
export const deleteProductInCart = (id, price) => {
  return dispatch => {
    price = -price
    dispatch(deleteProductFromCart(id))
    dispatch(updateCounterPrice(price))
  }
}
