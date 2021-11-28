import styled from "styled-components";

export const ContenedorNavbar = styled.div`
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FDB99B;
`
export const Logo = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    justify-content: center;
    color: #f7797d;
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
        width: 25%;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
            background-color: transparent;
            color: #f7797d;
        }
    }
`