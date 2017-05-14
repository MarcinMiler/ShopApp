import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

import Home from './Components/Shop/Home'
import Admin from './Components/Admin/Admin'
import Cart from './Components/Shop/Cart'

//creating store with redux thunk
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

//Applying routing
ReactDOM.render(
  <Provider store={store}>
    <Router>

      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/admin/" component={Admin}/>
        <Route path="/cart" component={Cart}/>
      </div>

    </Router>
  </Provider>,
  document.getElementById('root')
)
