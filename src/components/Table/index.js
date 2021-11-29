import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ContenedorTable, Tabla, Titulos, Data, Boton } from './style';

import { OneRestaurant } from '../../state/actions/restaurantActions';

const Table = () => {

    const dispatch = useDispatch()
    const selectRestaurant = (info) => dispatch( OneRestaurant(info) )
    const restaurants = useSelector(state => state.restaurants.allRestaurants[0])
    const history = useHistory()
    const redirect = (id, info) => {
        selectRestaurant(info)
        history.push(`/edit/${id}`)
    }
    useEffect(() => {

    }, [restaurants])

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
                            <td> {restaurant.rating} </td>
                            {restaurant.visited ? (<td>Visitado</td>) : (<td>Pendiente</td>)}
                            <td>  
                                <Boton 
                                    type='button'
                                    onClick={() => redirect(restaurant.id, restaurant) }
                                ><i className="far fa-edit"></i> </Boton>
                                <Boton
                                    type='button'
                                    
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