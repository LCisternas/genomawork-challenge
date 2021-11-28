import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LoginAuth } from '../../state/actions/authActions';

const PrivateRoute = ({ component:Component, ...props }) => {
    
    const dispatch = useDispatch()
    const trueAuth = useSelector( state => state.auth.authenticated )
    const userData = localStorage.getItem('datauser')
    const reLogin = ( info ) => dispatch( LoginAuth(info) )

    useEffect(() => {
        reLogin(userData)
    }, [])

    return (
        <Route 
            {...props}
            render={props => !trueAuth ? (
                <Redirect to='/' />
            ) : (
                <Component {...props} />
            )}
        />
    )
}

export default PrivateRoute;