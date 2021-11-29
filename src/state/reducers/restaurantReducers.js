import { GET_RESTAURANTS, ONE_RESTAURANT, UPDATE_STATE, NEW_RESTAURANT, DELETE_RESTAURANT, ASCENDENTE, DESCENDENTE, FILTRAR_PENDIENTES, FILTRAR_VISITADOS } from '../type';

const initialState = {
    allRestaurants : [],
    selectRestaurant: {},
    update: 0,
}

export default function restaurantReducer(state = initialState, action) {
    switch(action.type) {
        case FILTRAR_VISITADOS:
            return {
                ...state,
                allRestaurants: state.allRestaurants.filter(item => item.visited !== false),
                update: state.update + 1
            }
        case FILTRAR_PENDIENTES:
            return {
                ...state,
                allRestaurants: state.allRestaurants.filter(item => item.visited !== true),
                update: state.update + 1
            }
        case DESCENDENTE:
            return {
                ...state,
                allRestaurants: state.allRestaurants.sort(((a,b) => a.rating - b.rating)),
                update: state.update + 1
            }
        case ASCENDENTE: {
            return {
                ...state,
                allRestaurants: state.allRestaurants.sort(((a,b) => b.rating - a.rating)),
                update: state.update + 1
            }
        }
        case DELETE_RESTAURANT:
            return {
                ...state,
                allRestaurants: state.allRestaurants.filter(item => item.id !== action.payload)
            }
        case NEW_RESTAURANT: {
            return {
                ...state,
                allRestaurants: [...state.allRestaurants, action.payload]
            }
        }
        case UPDATE_STATE:
            return {
                ...state,
                allRestaurants: state.allRestaurants.map(i => i.id === action.payload.id ? action.payload : i)
            }
        case ONE_RESTAURANT:
            return {
                ...state,
                selectRestaurant: action.payload
            }
        case GET_RESTAURANTS:
            return {
                ...state,
                allRestaurants: action.payload
            }
        default:
            return state
    }
}