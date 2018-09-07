import React, {Component} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import {PrivateRoute} from './PrivateRoute'
import HomePage from '../Pages/HomePage'
import LogInPage from '../Pages/LogInPage'
import RegisterPage from '../Pages/RegisterPage'
class Routing extends Component {
  noMatch = () => {
    return <h1>Invalid adress, page not found</h1>
  }
  logInOrGoHome = () => !this.props.isLoggedIn
    ? <LogInPage /> : <Redirect to='/' />
  render () {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/login' render={this.logInOrGoHome} />
            <PrivateRoute exact path='/' logged={this.props.isLoggedIn} component={HomePage} />
            <Route path='/register' component={RegisterPage} />
            <Route component={this.noMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('routing', state)
  return {
    state
  }
}
// ({
//   isLoggedIn: state.isLoggedIn
// })

export default connect(mapStateToProps, null)(Routing)
