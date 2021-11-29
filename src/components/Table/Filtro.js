import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContenedorFiltro ,BotonFiltro } from './style';

import { FiltroPendientes } from '../../state/actions/restaurantActions';
import { FiltroVisitados } from '../../state/actions/restaurantActions';
import { AllRestaurant } from '../../state/actions/restaurantActions';

const Filtro = () => {

    const dispatch = useDispatch()
    const pendientes = () => dispatch( FiltroPendientes() )
    const visitados = () => dispatch( FiltroVisitados() )
    const restaurantes = (info) => dispatch( AllRestaurant(info) )
    const token = "Token " + useSelector(state=> state.auth.token) 
    const [show, setShow] = useState(false)

    return (
        <ContenedorFiltro>
            {show ? (
                <BotonFiltro
                    type='button'
                    // eslint-disable-next-line
                    onClick={() => (restaurantes(token), setShow(false))}
                >Quitar filtro</BotonFiltro>
            ) : (
                <Fragment>
                    <BotonFiltro
                        type='button'
                        // eslint-disable-next-line
                        onClick={() => (visitados(), setShow(true))}
                    >Visitados</BotonFiltro>
                    <BotonFiltro
                        type='button'
                        // eslint-disable-next-line
                        onClick={() => (pendientes(), setShow(true))}
                    >Pendientes</BotonFiltro>
                </Fragment>
            )}
        </ContenedorFiltro>
    );
}
 
export default Filtro;