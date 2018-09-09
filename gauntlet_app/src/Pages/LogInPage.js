import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Auth from '../Components/Authentification'
export default class LogInPage extends Component {
  render () {
    return (
      <div>
        <Auth />
        <NavLink className='nav' to="/register">Create new account</NavLink>
      </div>
    )
  }
}
