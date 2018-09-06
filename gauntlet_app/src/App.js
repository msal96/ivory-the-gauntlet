import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import SignUp from './Components/SignUp'
import Reducer from './Reducer/Reducer'
import MainSaga from './Saga/saga'
import './App.css';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(Reducer,
	applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(MainSaga)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <SignUp />
      </div>
      </Provider>
    );
  }
}

export default App;
