import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//importing actions
import { setFilter, fetchProducts, clearProducts, changeTypeSort } from '../../Actions'
import '../../Styles/Shop.css'

//importing components
import Product from './Product'
import FaCart from 'react-icons/lib/fa/shopping-cart'

class Home extends Component {

  //fetching products when component will be mounted
  componentWillMount() {
    this.props.fetchProducts()
  }
  //when component will be removed from DOM this function will clear array of products in reducer
  //I must apply this because if i go to cart and comeback to Home i have doubled products, because
  //i fetching products when Home is mounted, this think needs to be fix
  componentWillUnmount() {
    this.props.clearProducts()
  }

  //changing type of sort
  changeTypeSort(typeSort) {
    this.props.changeTypeSort(typeSort)
    this.forceUpdate()
  }

  //settings filter to redcer
  search(filter) {
    this.props.setFilter(filter)
  }

  render() {
    //rendering list of products and filtring products, its no efficient way to filtr products,
    //searching is based on indexOf, and when title is "AMD RYZEN", when we type "RYZEN AMD", then
    //we don't getting this product, this must be upgrade to searching for anything, now is searching only for title of product
    const listOfProducts = this.props.products.filter(product => {
      return product.title.toLowerCase().indexOf(this.props.settings.filter.toLowerCase()) >= 0
    })
    .map((product, i) => {
      return(
          <Product product={product} key={i} />
      )
    })

    return(
      <div className="container">

        <div className="row">
          <div className="col-lg-9"><Link className="btn btn-success" to="/">Home</Link></div>
          <div className="col-lg-3">
            <Link to="/Cart"><FaCart className="Nav-cart" /></Link>
            <span className="Nav-price">{ this.props.settings.cartPrice } zł</span>
            <Link className="btn btn-success" to="/Admin">Admin</Link>
          </div>
        </div>

        <h1 className="text-center" style={{marginTop: '20px'}}>Filtring</h1>

        <div className="input-group">
          <input className="form-control" type="text" placeholder="Search..." onChange={(event) => this.search(event.target.value)} />
        </div>

        <h2  style={{marginTop: '20px'}}>Products</h2>
        <hr />

        <div className="row">

          <div className="col-lg-12">

            <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect" style={{marginLeft: '10px', float: 'right'}}
              onChange={(event) => this.changeTypeSort(event.target.value)} >
              <option defaultValue value="a">From A to Z</option>
              <option value="min">Price from lowest</option>
              <option value="max">Price from highest</option>
              <option value="z">From Z to A</option>
            </select>

            <span style={{float: 'right', marginTop: '5px'}}>Sort by: </span>



            <div style={{clear: 'both'}}></div>

            <div className="row" style={{marginTop: '10px'}}>

              { listOfProducts }

            </div>

          </div>

        </div>

        <div className="Footer">
          <p className="text-center" style={{marginTop:'20px'}}>Made by: Marcin Miler</p>
          <p className="text-center">Photos from x-kom.pl</p>
        </div>


      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.Cart,
    products: state.Products,
    settings: state.Settings
  }
}

export default connect(mapStateToProps, { setFilter, fetchProducts, clearProducts, changeTypeSort })(Home);
