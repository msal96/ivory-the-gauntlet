import {
  CREATE_USER,
  AUTH_USER,
  SET_IS_LOGGED_IN_TO_TRUE,
  LOGOUT
} from '../Constants/Constants'
let initialState = {
  signUpData: {},
  authData: {},
  isLoggedIn: false,
  notes: []
}
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        signUpData: {
          ...action.payload.signUpData
        }
      }
    case AUTH_USER:
      console.log('Auth:', action.payload)
      return {
        ...state,
        authData: {
          ...action.payload.authData
        }
      }
    case SET_IS_LOGGED_IN_TO_TRUE:
      return {
        ...state,
        isLoggedIn: true
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state
  }
}
export default Reducer
