import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from '../Navbar';

import Swal from 'sweetalert2';
import { ContenedorEdit, Formulario, Input, Boton } from './style';

import { UpdateRestaurant } from '../../state/actions/restaurantActions';

const Edit = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const update = (info) => dispatch(UpdateRestaurant(info))
    const editRestaurant = useSelector(state => state.restaurants.selectRestaurant)
    const token = useSelector(state => state.auth.token) 

    const [restaurant, setRestaurant] = useState(
        {
            id: editRestaurant.id,
            name: editRestaurant.name,
            location: editRestaurant.location,
            food: editRestaurant.food,
            rating: editRestaurant.rating,
            visited: editRestaurant.visited
        }
    )
    const { name, location, food, rating, visited } = restaurant
    
    const handleChange = e => {
        setRestaurant({
            ...restaurant,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(name === '' || location === '' || food === '' || rating === '') {
            return Swal.fire({
                icon: 'error',
                title: 'No pueden haber campos vacios'
            })
        }
        restaurant.visited = visited === 'true' ? true : false
        restaurant.rating = parseInt(rating)
        const info = [token, restaurant]
        update(info)
        history.push('/home')
    }
    

    return (
        <ContenedorEdit>
            <Navbar />
            <h1>Editar Restaurant</h1>
            <Formulario onSubmit={handleSubmit}>
                <Input>
                    <label>Nombre</label>
                    <input
                        value={name}
                        name='name'
                        type='text'
                        onChange={handleChange}
                    />
                </Input>
                <Input>
                    <label>Ubicación</label>
                    <input
                        value={location}
                        name='location' 
                        type='text'
                        onChange={handleChange}
                    />
                </Input>
                <Input>
                    <label>Tipo</label>
                    <input
                        value={food}
                        name='food' 
                        type='text'
                        onChange={handleChange}
                    />
                </Input>
                <Input>
                    <label>Calificacion</label>
                    <input
                        value={rating}
                        max='5'
                        min='1'
                        name='rating'
                        type='number'
                        onChange={handleChange}
                    />
                </Input>
                <Input>
                    <label>Visita</label>
                    <select
                        value={visited}
                        name='visited'
                        onChange={handleChange}
                    >   <option>true</option>
                        <option>false</option>
                    </select>
                </Input>
                <Boton
                    type='submit'
                >Editar</Boton>
            </Formulario>
        </ContenedorEdit>
    );
}
 
export default Edit;