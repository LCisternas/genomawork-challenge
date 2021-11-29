import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Swal from 'sweetalert2';
import { ContenedorTable, Tabla, Titulos, Data, Boton } from './style';
import Rating from '@mui/material/Rating';

import { OneRestaurant } from '../../state/actions/restaurantActions';
import { DeleteRestaurant } from '../../state/actions/restaurantActions';

const Table = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const selectRestaurant = (info) => dispatch( OneRestaurant(info) )
    const borrarRestaurant = (info) => dispatch( DeleteRestaurant(info) )
    const token = useSelector(state => state.auth.token)
    const restaurants = useSelector(state => state.restaurants.allRestaurants)
    
    const redirect = (id, info) => {
        selectRestaurant(info)
        history.push(`/edit/${id}`)
    }

    const borrar = (info) => {
        const arr = [token, info]
        Swal.fire({
            title: '¿Seguro que quieres borrar el restaurante?',
            confirmButtonText: 'Si!',
            showCancelButton: true
        }).then((result) => {
            if(result.isConfirmed) {
              borrarRestaurant(arr)
            }
        })
    }

    if(!restaurants) return null

    return (
        <ContenedorTable>
            <Tabla>
                <Titulos>
                    <tr>
                        <th>Nombre</th>
                        <th>Ubicación</th>
                        <th>Tipo</th>
                        <th>Calificacion</th>
                        <th>Visita</th>
                        <th>Acción</th>
                    </tr>
                </Titulos>
                <Data>
                    {restaurants.map(restaurant => (
                        <tr key={restaurant.id}>
                            <td> {restaurant.name} </td>
                            <td> {restaurant.location} </td>
                            <td> {restaurant.food} </td>
                            <td> <Rating name="read-only" value={restaurant.rating} readOnly /></td>
                            {restaurant.visited ? (<td>Visitado</td>) : (<td>Pendiente</td>)}
                            <td>  
                                <Boton 
                                    type='button'
                                    onClick={() => redirect(restaurant.id, restaurant) }
                                ><i className="far fa-edit"></i> </Boton>
                                <Boton
                                    type='button'
                                    onClick={() => borrar(restaurant.id)}
                                ><i className="far fa-trash-alt"></i> </Boton>
                            </td>
                        </tr>
                    ))}
                </Data>
            </Tabla>
        </ContenedorTable>
    );
}
 
export default Table;