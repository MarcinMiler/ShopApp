import React, { Component } from 'react'
import { connect } from 'react-redux'
import FaCart from 'react-icons/lib/fa/shopping-cart'
import { productToCart } from '../../Actions'

class Product extends Component {

//when icon cart is clicked this function is fired and adding this product to cart
addToCart() {
  const { photo, title, price, id } = this.props.product
  this.props.productToCart(title, photo, price, id)
}

  render() {
    const { photo, title, cores, timing, cache, price, socket } = this.props.product
    return(
      <div className="col-lg-4 Product">
        <img className="Product-img" src={ photo } alt={ title } />
        <p className="Product-title">{ title }</p>
        <p className="Product-description">Socket: { socket }</p>
        <p className="Product-description">Processor Count: { cores }</p>
        <p className="Product-description">Processor Speed: { timing } GHz</p>
        <p className="Product-description">Cache: { cache }</p>
        <FaCart className="Product-cart" onClick={() => this.addToCart()} />
        <p className="Product-price">{ price } zł</p>
      </div>
    )
  }
}

export default connect(null, { productToCart })(Product);
