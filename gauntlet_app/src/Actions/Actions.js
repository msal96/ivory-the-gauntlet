import { CREATE_USER, AUTH_USER } from '../Constants/Constants'
export const createUser = signUpData => ({
    type: CREATE_USER,
    payload: {
        signUpData
    }
})