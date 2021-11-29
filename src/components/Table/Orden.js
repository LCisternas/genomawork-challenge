import React from 'react';
import { useDispatch } from 'react-redux';
import { BotonOrden } from './style';
import { Ascendente } from '../../state/actions/restaurantActions';
import { Descendente } from '../../state/actions/restaurantActions';

const Orden = () => {
    
    const dispatch = useDispatch()
    const ascendente = () => dispatch( Ascendente() )
    const descendente = () => dispatch( Descendente() )

    return (
        <div>
            <BotonOrden
                type='button'
                onClick={() => ascendente()}
            ><i className="fas fa-sort-up"></i></BotonOrden>
            <BotonOrden
                type='button'
                onClick={() => descendente()}
            ><i className="fas fa-sort-down"></i></BotonOrden>
        </div>
    );
}
 
export default Orden;