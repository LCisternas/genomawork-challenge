import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { LogoutAuth } from '../../state/actions/authActions';
import { ContenedorNavbar, Logo, Botones } from './style';

const Navbar = () => {

    const dispatch = useDispatch()
    const token = "Token " + useSelector( state => state.auth.token )
    const history = useHistory()
    const logout = (info) => dispatch( LogoutAuth(info) )

    return (
        <ContenedorNavbar>
            <Logo>
                <Link to='/home'><h1>@MejorConTocino Web</h1></Link>
            </Logo>
            <Botones>
                <button
                    onClick={() => history.push('/add')}
                >Postear Restaurant</button>
                <button
                    onClick={() => logout(token)}
                >Logout</button>
            </Botones>
        </ContenedorNavbar>
    );
}
 
export default Navbar;