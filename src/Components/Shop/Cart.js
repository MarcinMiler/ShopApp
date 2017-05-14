import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addProductToCart, deleteProductInCart } from '../../Actions'

import FaCart from 'react-icons/lib/fa/shopping-cart'
import FaClose from 'react-icons/lib/fa/close'

class Cart extends Component {

  render() {
    //rendering list of products added to cart
    const list = this.props.cart.map((product, i) => {
      return(
        <div className="col-lg-12" key={i}>
          <div className="row">
            <div className="col-lg-6">
              <img src={product.photo} alt={product.title} width="70px" height="60px" />
              { product.title }
            </div>
            <div className="col-lg-2"><p className="Cart-description">{ product.price } zł</p></div>
            <div className="col-lg-2"><p className="Cart-description">1</p></div>
            <div className="col-lg-2">
              <p className="Cart-description" style={{textAlign: 'right'}}>{ product.price } zł</p>
              <span className="Cart-x"><FaClose onClick={() => this.props.deleteProductInCart(product.id, product.price)} /></span>
            </div>
          </div>
          <hr />
        </div>
      )
    })

    return(
      <div className="container">

        <div className="row">
          <div className="col-lg-3"><Link className="btn btn-primary" to="/">Logo</Link></div>
          <div className="col-lg-6">
            <input className="form-control" type="text" />
          </div>
          <div className="col-lg-3">
            <Link to="/Cart"><FaCart className="Nav-cart" /></Link>
            <span className="Nav-price">{ this.props.cartPrice } zł</span>
            <Link className="btn btn-success" to="/Admin">Admin</Link>
          </div>
        </div>

        <h4 style={{marginTop: '50px'}}>Your cart:</h4>

        <div className="row">
          <div className="col-md-6"><p>Product</p></div>
          <div className="col-md-2"><p className="text-center">Price</p></div>
          <div className="col-md-2"><p className="text-center">Amount</p></div>
          <div className="col-md-2">
            <p className="text-right">All</p>
          </div>
        </div>
        <hr style={{marginTop: '0px'}} />
        <div className="row">

          {
            list
          }
        </div>


        <p className="Text-bold text-right">Value of purchases: { this.props.cartPrice } zł</p>
        <button className="btn btn-success" style={{float: 'right'}}>Go to Pay</button>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.Cart,
    cartPrice: state.Settings.cartPrice
  }
}

export default connect(mapStateToProps, { addProductToCart, deleteProductInCart })(Cart);
