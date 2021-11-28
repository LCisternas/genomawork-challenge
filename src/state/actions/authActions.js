import { LOGIN_EXITOSO } from '../type';
import axios from 'axios';

export function authentication(info) {
    return async (dispatch) => {
        try {
            const url = "https://api.staging.genoma.work/api/v1/accounts/login/"
            axios.post(url, {}, {
                headers: {'Authorization': info}
            }).then(res => {
                dispatch(loginExitoso(res.data))
            })
        } catch (error) {
            console.log(error)
        }
    }
}
const loginExitoso = ( info ) => ({
    type: LOGIN_EXITOSO,
    payload: info
})