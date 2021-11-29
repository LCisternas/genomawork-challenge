import { GOOD_LOGIN, GOOD_LOGOUT } from '../type';
import axiosLogin from '../../config/axiosLogin';
import axiosLogout from '../../config/axiosLogout';

/* Inicio Sesión */
export function LoginAuth(info) {
    return async (dispatch) => {
        localStorage.setItem('datauser', info)
        try {
            await axiosLogin.post('', {}, {
                headers: {
                    "Authorization": info
                }
            }).then(res => {
                dispatch( successLogin(res.data) )
            })
        } catch (error) {
            console.log('Desde authActions -->', error)
        }
    }
}
const successLogin = (info) => ({
    type: GOOD_LOGIN,
    payload: info
})
/* Inicio Sesión */

/* Cierre Sesion */
export function LogoutAuth(info) {
    return async (dispatch) => {
        try {
            await axiosLogout.post('', {}, {
                headers: {
                    "Authorization": info
                }
            })
            dispatch( successLogout() )
        } catch (error) {
            console.log('Desde AuthActions -->', error)
        }
    }
}
const successLogout = () => ({
    type: GOOD_LOGOUT,
})
/* Cierre Sesion */