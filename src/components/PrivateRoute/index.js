import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { LoginAuth } from '../../state/actions/authActions';

const PrivateRoute = ({ component:Component, ...props }) => {
    
    const dispatch = useDispatch()
    const reLogin = ( info ) => dispatch( LoginAuth(info) )
    const trueAuth = useSelector( state => state.auth.authenticated )
    const cargando = useSelector( state => state.auth.cargando )

    const userData = localStorage.getItem('datauser')
    useEffect(() => {
        reLogin(userData)
    // eslint-disable-next-line    
    }, [])

    return (
        <Route 
            {...props}
            render={props => !trueAuth && !cargando ? (
                <Redirect to='/' />
            ) : (
                <Component {...props} />
            )}
        />
    )
}

export default PrivateRoute;