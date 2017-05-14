import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Products from './Products'

import '../../Styles/Admin.css'

const Admin = ({match, history}) => (
  <Router>
    <div className="row">
      <div className="col-md-2 Nav">

        <Link className="list-group-item" to={`${match.url}/items`}>Items</Link>
        <li className="list-group-item" onClick={() => history.push('/')}>Home</li>

      </div>

      <hr/>

      <Route path={`${match.url}/items`} component={Products} />

    </div>
  </Router>
)



export default Admin
