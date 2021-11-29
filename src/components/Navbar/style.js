import styled from "styled-components";

export const ContenedorNavbar = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FDB99B;
    @media all and (max-width: 768px) {
        flex-direction: column;
        height: 20%;
    }
`
export const Logo = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    justify-content: center;
    color: #f7797d;
    @media all and (max-width: 768px) {
        width: 100%;
        height: 50%;
        h1 {
            font-size: 2rem;
        }
    }
`
export const Botones = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        background-color: #f7797d;
        color: #FDB99B;
        font-size: 1.6rem;
        font-weight: 600;
        border: 2px solid #f7797d;
        border-radius: 10px;
        margin: 0 1rem;
        height: 50%;
        width: 35%;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
            background-color: transparent;
            color: #f7797d;
        }
    }
    @media all and (max-width: 768px) {
        width: 100%;
        height: 50%;
        button {
            height: 70%;
            width: 40%;
            font-size: 1.4rem;
        }
    }
`