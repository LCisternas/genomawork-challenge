import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../../state/context/userContext';

import { LoginAuth } from '../../state/actions/authActions';

import { ContenedorLogin, LoginImagen, LoginForm, Content } from './style';
import Swal from 'sweetalert2';


const Login = () => {

    /* GLOBAL STATE */
    const { user, setUser } = useContext(UserContext)
    const { email, password } = user
    const dispatch = useDispatch();
    const sendAuth = (info) => dispatch( LoginAuth(info) )
    const userAuth = useSelector( state => state.auth.authenticated )
    /* GLOBAL STATE */
    const history = useHistory();
    
    useEffect(() => {
        if(userAuth) {
            history.push('/home')
        }
    }, [userAuth])

    /* FUNCTIONS */
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        /* VALIDACIONES */
        if(email === '' && password === '') {
            return Swal.fire({
                icon: 'error',
                title: 'Ambos campos deben ser completados'
            })
        }
        if(email === '') {
            return Swal.fire({
                icon: 'error',
                title: 'Debes ingresar un email'
            })
        }
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)){
            return Swal.fire({
                icon: 'error',
                title: 'Debes ingresar un email con formato valido'
            })
        }
        if(password === '') {
            return Swal.fire({
                icon: 'error',
                title: 'Debes ingresar una contraseña'
            })
        }
        if(password.length < 6) {
            return Swal.fire({
                icon: 'error',
                title: 'La contraseña debe contar con 6 o mas caracteres'
            })
        }
        /* VALIDACIONES */
        const encode = "Basic " + btoa(email + "::" + password)
        sendAuth(encode)
    }
    /* FUNCTIONS */

    return (
        <ContenedorLogin>
            <LoginImagen>
                <Content>
                    <h1>¡MejorConTocino necesita tu ayuda!</h1>
                    <p> Postea los mejores restaurantes que conozcas y participa por un viaje alrededor del mundo degustando los mejores manjares acompañado de tu influencer favorita mbn25244@eoopy.com frontend.01<i className="far fa-grin-hearts"></i></p>
                </Content>
            </LoginImagen>

            <LoginForm>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input
                        type='text'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        placeholder='Correo electronico'
                    />
                    <input 
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        placeholder='Contraseña'
                    />
                    <button>Iniciar Sesión</button>
                </form>
            </LoginForm>
        </ContenedorLogin>
    );
}
 
export default Login;