import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authUser } from '../Actions/Actions'

class Auth extends Component {
  constructor () {
    super()
    this.state = {
      authData: {
        username: '',
        password: ''
      }
    }
  }
  onSubmit = e => {
    console.log('auth:', this.state.authData)
    e.preventDefault()
    this.props.authUser(this.state.authData)
  }
  onChangeUsername = (event) => {
    this.setState({
      authData: {
        ...this.state.authData,
        username: event.target.value
      }
    })
  }
  onChangePassword = (event) => {
    this.setState({
      authData: {
        ...this.state.authData,
        password: event.target.value
      }
    })
  }
  render () {
    const { username, password } = this.state.authData
    return (
      <div className='Auth'>
        <form onSubmit={this.onSubmit}>
          <div>
          <label>Username</label>
          <input type='text' value={username} onChange={this.onChangeUsername} />
          </div>
          <div>
          <label>Password</label>
          <input type='password' value={password} onChange={this.onChangePassword} />
          </div>
          <input type='submit' onSubmit={this.onSubmit} value='Log in' />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  authUser
}
export default connect(null, mapDispatchToProps)(Auth)
