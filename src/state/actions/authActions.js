import { GOOD_LOGIN } from '../type';
import axiosLogin from '../../config/axiosLogin';
import userAuth from '../../config/userAuth';

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