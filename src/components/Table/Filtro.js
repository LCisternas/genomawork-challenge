import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { ContenedorFiltro ,BotonFiltro } from './style';
import { FiltroPendientes } from '../../state/actions/restaurantActions';
import { FiltroVisitados } from '../../state/actions/restaurantActions';

const Filtro = () => {

    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const pendientes = () => dispatch( FiltroPendientes() )
    const visitados = () => dispatch( FiltroVisitados() )

    return (
        <ContenedorFiltro>
            {show ? (
                <BotonFiltro
                    type='button'
                    onClick={() => {setShow(false)}}
                >Quitar filtro</BotonFiltro>
            ) : (
                <Fragment>
                    <BotonFiltro
                        type='button'
                        onClick={() => {visitados(), setShow(true)}}
                    >Visitados</BotonFiltro>
                    <BotonFiltro
                        type='button'
                        onClick={() => {pendientes(), setShow(true)}}
                    >Pendientes</BotonFiltro>
                </Fragment>
            )}
        </ContenedorFiltro>
    );
}
 
export default Filtro;