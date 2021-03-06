import { GET_RESTAURANTS, ONE_RESTAURANT, UPDATE_STATE, NEW_RESTAURANT, 
    DELETE_RESTAURANT, ASCENDENTE, DESCENDENTE, 
    FILTRAR_PENDIENTES, FILTRAR_VISITADOS } from '../type';
import axios from 'axios';

/* Consulta todos los Restaurantes */
export function AllRestaurant(info) {
    return async (dispatch) => {
        try {
            const url = "https://genoma-challenge-app.herokuapp.com/restaurants/"
            await axios.get(url, {headers: {
                "Authorization": info
            }}).then(res => {
                dispatch( todosLosRestaurantes(res.data)  )        
            })
        } catch (error) {
            console.log('Desde restaurantActions -->', error)
        }
    }
}
const todosLosRestaurantes = (info) => ({
    type: GET_RESTAURANTS,
    payload: info 
})
/* Consulta todos los Restaurantes */

/* Consulta por Restaurant especifico */
export function OneRestaurant(info) {
    return async (dispatch) => {
        try {
            await dispatch( restaurantEspecifico(info) )
        } catch (error) {
            console.log('Desde restaurantActions -->', error)
        }
    }
}
const restaurantEspecifico = (info) => ({
    type: ONE_RESTAURANT,
    payload: info
})
/* Consulta por Restaurant especifico */

/* Actualiza un Restaurante */
export function UpdateRestaurant(info) {
    return async (dispatch) => {
        try {
            const [token, restaurant] = info;
            const url = `https://genoma-challenge-app.herokuapp.com/restaurants/${restaurant.id}/`
            await axios.patch(url, restaurant, {headers: {
                "Authorization": "Token " + token
            }}).then(res => {
                dispatch( updateState(res.data) )
            })
        } catch (error) {
            console.log('Desde restaurantActions', error)
        }
    }
}
const updateState = (info) => ({
    type: UPDATE_STATE,
    payload: info
})
/* Actualiza un Restaurante */

/* Crea un nuevo Restaurant */
export function PostRestaurant(info) {
    return async (dispatch) => {
        try {
            const url = 'https://genoma-challenge-app.herokuapp.com/restaurants/'
            const [token, restaurant] = info
            await axios.post(url, restaurant, {headers:{
                "Authorization": "Token " + token 
            }}).then(res => {
                dispatch(addRestaurant(res.data))
            })
        } catch (error) {
            console.log(error)
        }
    }
}
const addRestaurant = (info) => ({
    type: NEW_RESTAURANT,
    payload: info
})
/* Crea un nuevo Restaurant */

/* Elimina un Restaurant */
export function DeleteRestaurant(info) {
    return async (dispatch) => {
        try {
            const [token, id] = info
            const url = `https://genoma-challenge-app.herokuapp.com/restaurants/${id}/`
            await axios.delete(url, {headers: {
                "Authorization": "Token " + token
            }}).then(res => {
                dispatch( deleteState(id) )
            })
        } catch (error) {
            console.log('desde restaurantAction', error)
        }
    }
}
const deleteState = (info) => ({
    type: DELETE_RESTAURANT,
    payload: info
})
/* Elimina un Restaurant */

/* Funcion que filtran los datos */
export function Ascendente() {
    return async (dispatch) => {
        dispatch( mayorAmenor() )
    }
}
const mayorAmenor = () => ({
    type: ASCENDENTE,
})

export function Descendente() {
    return async(dispatch) => {
        dispatch( menorAmayor() )
    }
}
const menorAmayor = () => ({
    type: DESCENDENTE,
})

export function FiltroPendientes() {
    return async (dispatch) => {
        dispatch( pendientes() )
    }
}
const pendientes = (word) => ({
    type: FILTRAR_PENDIENTES
})

export function FiltroVisitados() {
    return async (dispatch) => {
        dispatch( visitados() )
    }
}
const visitados = () => ({
    type: FILTRAR_VISITADOS
})
/* Funcion que filtran los datos */