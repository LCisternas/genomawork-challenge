import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar';
import Table from '../Table';
import Filtro from '../Table/Filtro';
import Orden from '../Table/Orden';

import { AllRestaurant } from '../../state/actions/restaurantActions';

import { ContenedorHome, Filtros } from './style';

const Home = () => {

    const dispatch = useDispatch()
    const restaurantes = (info) => dispatch( AllRestaurant(info) )
    const token = "Token " + useSelector(state => state.auth.token)
    const restaurants = useSelector(state => state.restaurants.allRestaurants)
    const updatenow = useSelector(state => state.restaurants.update) 

    useEffect(() => {
        if(token) {
            if(restaurants.length === 0) {
                return restaurantes(token)
            }
            restaurantes(token)
        }
    }, [])
    useEffect(() => {

    }, [updatenow])

    return (
        <ContenedorHome>
            <Navbar />
            {restaurants ? (<h1>¡Bienvenido Genomin!</h1>) : (<h1>Cargando tabla...</h1>)}
            <Filtros>
                <Orden />
                <Filtro />
            </Filtros>
            <Table />
        </ContenedorHome>
    );
}
 
export default Home;