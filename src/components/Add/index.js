import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../Navbar';

import Swal from 'sweetalert2';
import { ContenedorAdd, Formulario, Input, Boton } from './style';

import { PostRestaurant } from '../../state/actions/restaurantActions';

const Add = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const post = (info) => dispatch( PostRestaurant(info) )

    const token = useSelector(state => state.auth.token)

    const [newRestaurant, setNew] = useState({
        name: '',
        location: '',
        food: '',
        rating: '',
        visited: false
    })
    const { name, location, food, rating } = newRestaurant 

    const handleChange = e => {
        setNew({
            ...newRestaurant,
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
        newRestaurant.rating = parseInt(rating)
        const restaurant = [token, newRestaurant]
        post(restaurant)
        history.push('/home')
    }

    return (
        <ContenedorAdd>
            <Navbar />
            <h1>Postear un nuevo Restaurant</h1>
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
                <Boton
                    type='submit'
                >Agregar</Boton>
            </Formulario>
        </ContenedorAdd>
    );
}
 
export default Add;