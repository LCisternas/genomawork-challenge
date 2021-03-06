import { GOOD_LOGIN, GOOD_LOGOUT } from '../type';

const initialState = {
    token: localStorage.getItem('token'),
    authenticated: false,
    user: {},
    cargando: true
}

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case GOOD_LOGOUT:
            return {
                ...state,
                authenticated: false,
                user: {}
            }
        case GOOD_LOGIN:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                authenticated: true,
                user: action.payload.user,
                cargando: false
            }
        default:
            return state
    }
}