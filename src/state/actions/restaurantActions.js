import { GET_RESTAURANTS, ONE_RESTAURANT, UPDATE_STATE, NEW_RESTAURANT } from '../type';
import axios from 'axios';
import axiosRestaurant from '../../config/axiosRestaurant';

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

export function PostRestaurant(info) {
    return async (dispatch) => {
        const url = 'https://genoma-challenge-app.herokuapp.com/restaurants/'
        const [token, restaurant] = info
        await axios.post(url, restaurant, {headers:{
            "Authorization": "Token " + token 
        }}).then(res => {
            dispatch(addRestaurant(res.data))
        })
    }
}
const addRestaurant = (info) => ({
    type: NEW_RESTAURANT,
    payload: info
})