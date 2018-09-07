import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import Reducer from './Reducer/Reducer'
import MainSaga from './Saga/saga'
import Routing from './Routing/Routing'
import './App.css'

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
