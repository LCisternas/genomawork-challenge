import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LogoutAuth } from '../../state/actions/authActions';
import { ContenedorNavbar, Logo, Botones } from './style';

const Navbar = () => {

    const dispatch = useDispatch()
    const token = "Token " + useSelector( state => state.auth.token )
    console.log(token)
    const history = useHistory()
    const logout = (info) => dispatch( LogoutAuth(info) )

    return (
        <ContenedorNavbar>
            <Logo>
                <h1>@MejorConTocino Web</h1>
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