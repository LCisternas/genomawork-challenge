import { GET_RESTAURANTS, ONE_RESTAURANT, UPDATE_STATE, NEW_RESTAURANT, DELETE_RESTAURANT } from '../type';

const initialState = {
    allRestaurants : [],
    selectRestaurant: {},
}

export default function restaurantReducer(state = initialState, action) {
    switch(action.type) {
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