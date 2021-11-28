import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component:Component, ...props }) => {
    
    const trueAuth = useSelector( state => state.auth.authenticated )

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