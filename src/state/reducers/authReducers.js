import { LOGIN_EXITOSO } from '../type';

const initialState = {
    token: localStorage.getItem('token'),
    authenticated: false,
    user: {}
}

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                token: localStorage.getItem('token'),
                authenticated: true,
                user: action.payload.user
            }
        default:
            return state
    }
}