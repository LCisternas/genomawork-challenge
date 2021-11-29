import styled from "styled-components";

export const ContenedorAdd = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        margin: 3rem 0;
        text-align: center;
        color: #f7797d;
    }
`
export const Formulario = styled.form`
    width: 500px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #FDB99B;
    border-radius: 10px;
`
export const Input = styled.div`
    width: 80%;
    height: 10%;
    display: flex;
    flex-direction: column;
    input {
        height: 50%;
        background-color: transparent;
        border: 0;
        border-bottom: 2px solid #f7797d;
        outline: none;
        font-size: 1.6rem;
    }
    label {
        color: #f7797d;
        font-weight: 600;
    }
    select {
        height: 50%;
        margin-top: 1rem;
        background-color: transparent;
        border: 2px solid #f7797d;
        border-radius: 5px;
        outline: none;
    }
`
export const Boton = styled.button`
    width: 80%;
    height: 8%;
    background-color: #f7797d;
    border: 2px solid #f7797d;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    font-size: 1.6rem;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        background-color: transparent;
        color: #f7797d;
    }
`