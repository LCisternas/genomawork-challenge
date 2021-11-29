import styled from "styled-components";

export const ContenedorTable = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Tabla = styled.table`
    width: 80%;
    margin-bottom: 5rem;
    td {
        text-align: center;
    }
`
export const Titulos = styled.thead`
    background-color: #f7797d;
    height: 7rem;
    color: #FDB99B;
    th {
        font-size: 2rem;
    }
`
export const Data = styled.tbody`
    background-color: #FDB99B;
    color: #f7797d;
    tr {
        height: 6rem;
    }
    td {
        font-size: 1.6rem;
        font-weight: 600;
    }
`
export const Boton = styled.button`
    background: transparent;
    color: #f7797d;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 2.8rem;
    padding: 1rem;
    margin: 0 .5rem;
    transition: all 0.3s;
    &:hover {
        background: #f7797d;
        color: #FDB99B;
        border-radius: 5px;
    }
`