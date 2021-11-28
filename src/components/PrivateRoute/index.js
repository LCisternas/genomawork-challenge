import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { UserContext } from '../../state/context/userContext';
// import { authentication } from '../../state/actions/authActions';

const PrivateRoute = ({ component:Component, ...props }) => {

    // const dispatch = useDispatch()
    // const auth = (info) => dispatch( authentication(info) )
    const trueAuth = useSelector( state => state.auth.authenticated )
    // const { user } = useContext(UserContext)
    // const { email, password } = user

    // useEffect(() => {
    //     const encode = "Basic " + btoa(email + '::' + password)
    //     auth(encode)
    // }, [])

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