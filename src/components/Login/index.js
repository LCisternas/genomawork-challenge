import React from 'react';

import { ContenedorLogin, LoginImagen, LoginForm, Content } from './style';

const Login = () => {
    return (
        <ContenedorLogin>
            <LoginImagen>
                <Content>
                    <h1>¡MejorConTocino necesita tu ayuda!</h1>
                    <p> Postea los mejores restaurantes que conozcas y participa por un viaje alrededor del mundo degustando los mejores manjares acompañado de tu influencer favorita <i className="far fa-grin-hearts"></i></p>
                </Content>
            </LoginImagen>

            <LoginForm>
                <form>
                    <h1>Login</h1>
                    <input
                        type='email'
                        placeholder='Correo electronico'
                    />
                    <input 
                        type='password'
                        placeholder='Contraseña'
                    />
                    <button>Iniciar Sesión</button>
                </form>
            </LoginForm>
        </ContenedorLogin>
    );
}
 
export default Login;