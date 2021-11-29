import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar';
import Table from '../Table';
import { AllRestaurant } from '../../state/actions/restaurantActions';

import { ContenedorHome } from './style';

const Home = () => {

    const dispatch = useDispatch()
    const restaurantes = (info) => dispatch( AllRestaurant(info) )
    const token = "Token " + useSelector(state => state.auth.token)
    const restaurants = useSelector(state => state.restaurants.allRestaurants)

    useEffect(() => {
        if(token) {
            if(restaurants.length === 0) {
                return restaurantes(token)
            }
            restaurantes(token)
        }
    }, [])

    return (
        <ContenedorHome>
            <Navbar />
            {restaurants ? (<h1>¡Bienvenido Genomin!</h1>) : (<h1>Cargando tabla...</h1>)}
            <Table />
        </ContenedorHome>
    );
}
 
export default Home;