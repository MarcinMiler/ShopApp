import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProductToFirebase, deleteProductFromFirebase } from '../../Actions'
//importing uniq id generator
import uniqid from 'uniqid'

class Items extends Component {
  constructor() {
    super()
    this.state = {
      product: {
        title: '',
        photo: '',
        cores: '',
        timing: '',
        cache: '',
        price: '',
        socket: ''
      },
      counter: 0,
      reset: 0,
      title: ''
    }
  }

  //added product to Database(Firebase)
  add() {
    //generate uniq id
    let id = uniqid()
    const { title, photo, cores, timing, cache, price, socket } = this.state.product
    this.props.addProductToFirebase(title, photo, cores, timing, cache, price, id, socket)
    //clearing inputs in products component when product is added to firebase
    this.clear()
  }

  //deleting products from firebase
  delete() {
    this.props.deleteProductFromFirebase(this.state.title)
    this.clear()
  }

  //this function clear inputs when action "add" trigers
  clear() {
    let { counter } = this.state
    counter++
    this.setState({reset: counter})
  }

  render() {

    return(
      <div className="col-md-10 Page-wrap">

        <div style={{clear: "both"}}></div>

        <h1 className="Title">Products Managment</h1>

        <div className="row">

          <div className="col-lg-6">

            <h4>Add product</h4>

            <label className="First-label">Title</label>
            <div className="input-group">
              <input className="form-control Product-add-input"
                type="text"
                key={this.state.reset}
                placeholder="Intel i7-7700K"
                onChange={event => {
                  let state = this.state.product
                  state.title = event.target.value
                  this.setState({state: state})
                }} />
            </div>

            <label className="First-label">Socket</label>
            <div className="input-group">
              <input className="form-control Product-add-input"
                type="text"
                key={this.state.reset}
                placeholder="1151"
                onChange={event => {
                  let state = this.state.product
                  state.socket = event.target.value
                  this.setState({state: state})
                }} />
            </div>

            <label className="First-label">Photo</label>
            <div className="input-group">
              <input className="form-control Product-add-input"
                type="text"
                key={this.state.reset}
                placeholder="Link"
                onChange={event => {
                  let state = this.state.product
                  state.photo = event.target.value
                  this.setState({state: state})
                }} />
            </div>

            <label className="First-label">Liczba rdzeni:</label>
            <div className="input-group">
              <input className="form-control Product-add-input"
                type="text"
                key={this.state.reset}
                placeholder="4 rdzenie"
                onChange={event => {
                  let state = this.state.product
                  state.cores = event.target.value
                  this.setState({state: state})
                }} />
            </div>

            <label className="First-label">Taktowanie rdzenia: </label>
            <div className="input-group">
              <input className="form-control Product-add-input"
                type="text"
                key={this.state.reset}
                placeholder="4.2 GHz"
                onChange={event => {
                  let state = this.state.product
                  state.timing = event.target.value
                  this.setState({state: state})
                }} />
            </div>

            <label className="First-label">Cache:</label>
            <div className="input-group">
              <input className="form-control Product-add-input"
                type="text"
                key={this.state.reset}
                placeholder="8 MB"
                onChange={event => {
                  let state = this.state.product
                  state.cache = event.target.value
                  this.setState({state: state})
                }} />
            </div>

            <label className="First-label">Price</label>
            <div className="input-group">
              <input className="form-control Product-add-input"
                type="text"
                key={this.state.reset}
                placeholder="1499 zł"
                onChange={event => {
                  let state = this.state.product
                  state.price = event.target.value
                  this.setState({state: state})
                }} />
            </div>

            <button className="btn btn-success" style={{marginTop: '10px'}} onClick={() => this.add()}>Add product</button>

          </div>

          <div className="col-lg-6">

          </div>


          <div className="col-lg-3">

            <h4 style={{marginTop: '20px'}}>Delete product</h4>

            <label className="First-label">Title</label>
            <div className="input-group">
              <input className="form-control Product-add-input"
                type="text"
                key={this.state.reset}
                placeholder="I7 7700K"
                onChange={event => this.setState({title: event.target.value})} />
            </div>

            <button className="btn btn-success" style={{marginTop: '10px'}} onClick={() => this.delete()}>Delete product</button>

          </div>

          <div className="col-lg-9">

          </div>
          
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

    settings: state.Settings
  }
}

export default connect(mapStateToProps, { addProductToFirebase, deleteProductFromFirebase })(Items);
