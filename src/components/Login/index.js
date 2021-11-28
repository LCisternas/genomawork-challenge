import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authentication } from '../../state/actions/authActions';
import { UserContext } from '../../state/context/userContext';

import { ContenedorLogin, LoginImagen, LoginForm, Content } from './style';

import Swal from 'sweetalert2';

const Login = () => {

    // const [user, setUser] = useState({ email: '', password: '' })

    const { user, setUser } = useContext(UserContext)

    const dispatch = useDispatch();
    const history = useHistory();

    const auth = (info) => dispatch( authentication(info) )

    const handleSubmit = e => {
        e.preventDefault()
        if(user.email === '' || user.password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Ambos campos deben ser completados',
            })
        }
        const encode = "Basic " + btoa(user.email + '::' + user.password)
        auth(encode)
        const redirect = () => {
            history.push('/home')
        }
        setTimeout(redirect, 1000)
    }
    
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

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
                        type='email'
                        name='email'
                        value={user.email}
                        onChange={handleChange}
                        placeholder='Correo electronico'
                    />
                    <input 
                        type='password'
                        name='password'
                        value={user.password}
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