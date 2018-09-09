import { CREATE_USER, AUTH_USER, SET_IS_LOGGED_IN_TO_TRUE, LOGOUT } from '../Constants/Constants'
export const createUser = signUpData => ({
    type: CREATE_USER,
    payload: {
        signUpData
    }
})
export const authUser = authData => ({
    type: AUTH_USER,
    payload: {
        authData
    }
})
export const setIsLoggedInToTrue = () => ({
    type: SET_IS_LOGGED_IN_TO_TRUE
})
export const setIsLoggedInToFalse = () => ({
    type: LOGOUT
})