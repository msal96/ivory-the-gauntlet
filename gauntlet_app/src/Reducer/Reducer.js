import { CREATE_USER, AUTH_USER } from '../Constants/Constants'
const initialState = {
    signUpData: {}
}
const Reducer = (state=initialState, action) => {
    switch(action.type) {
    case CREATE_USER:
        console.log(action.payload)
        return {
            ...state,
            signUpData: action.payload.signUpData
        }
    default: break
    }
}
export default Reducer