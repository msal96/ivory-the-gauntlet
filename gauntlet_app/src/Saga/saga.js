import { put, all, takeLatest, select } from 'redux-saga/effects'
import { Auth } from 'aws-amplify'

import * as Constants from '../Constants/Constants'
const { AUTH_USER, LOGOUT } = Constants

function* loginSaga() {
  try {
    let authData = yield select((state) => state.authData)
    let cognitoUser = yield Auth.signIn(authData.username, authData.password)
      .then(user => user)
      .catch(err => err)
    // if (cognitoUser.username) {
    //   yield put(userLogin())
    //   yield put(cognitoUserToState(cognitoUser))
    //} 
  } catch (error) {
    alert(error.message)
  }
}

function* logOutSaga(){
  try{
    yield Auth.signOut()
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  } catch (err){
    console.log(err)
  }
}
export default function* MainSagas () {
  yield all([
    yield takeLatest(AUTH_USER, loginSaga),
    yield takeLatest(LOGOUT, logOutSaga)
  ])
}