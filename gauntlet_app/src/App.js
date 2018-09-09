import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import Amplify from 'aws-amplify'
import Reducer from './Reducer/Reducer'
import MainSaga from './Saga/saga'
import Routing from './Routing/Routing'
import config from './Config/Config'
import './App.css'

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.Region,
    userPoolId: config.userPoolId,
    identityPoolId: config.Identity_Pool_ID,
    userPoolWebClientId: config.App_Client_ID
  },
  API: {
    endpoints: [{
      name: 'testApi',
      endpoint: '',
      region: config.Api_GateWay.region
    }
    ]
  }
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(Reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(MainSaga)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <Routing />
        </div>
      </Provider>
    )
  }
}

export default App
