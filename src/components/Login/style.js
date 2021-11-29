import styled from "styled-components";
import Imagen from '../../images/login.jpg';

export const ContenedorLogin = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`
export const LoginImagen = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Imagen});
    height: 100%;
    width: 50%;
    background-position: center;
    background-size: cover;
`
export const Content = styled.div`
    height: 100%;
    max-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    h1 {
        margin: 4rem 3rem;
        font-size: 5rem;
    }
    p {
        font-size: 2.2rem;
        margin: 2rem 5rem;
        line-height: 1.5;
        text-align: center;
        font-weight: 600;
    }
    i {
        font-size: 2.5rem;
    }
`
export const LoginForm = styled.div`
    background: linear-gradient(-45deg, #C6FFDD, #FDB99B, #f7797d);
	background-size: 400% 400%;
	animation: gradient 8s ease infinite;
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    form {
        display: flex;
        flex-direction: column;
        height: 80%;
        width: 60%;
        justify-content: space-evenly;
        align-items: center;
        background-color: white;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
    h1 {
        color: #FDB99B;
        font-size: 4rem;
    }
    input {
        width: 60%;
        height: 8%;
        border: 0;
        border-bottom: 2px solid #FDB99B;
        outline-style: none;
        font-size: 1.6rem;
        &:hover {
            border-bottom: 3px solid #FDB99B;
        }
        &::placeholder {
            color: #FDB99B;
            font-weight: 700;
        }
    }
    button {
        height: 10%;
        width: 60%;
        border: 2px solid #FDB99B;
        border-radius: 10px;
        background: #FDB99B;
        color: white;
        font-size: 2rem;
        font-weight: 600;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
            background: transparent;
            color: #FDB99B;
        }
    }
`