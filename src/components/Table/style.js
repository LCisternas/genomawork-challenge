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
    @media all and (max-width: 768px) {
        width: 100%;
    }
`
export const Titulos = styled.thead`
    background-color: #f7797d;
    height: 7rem;
    color: #FDB99B;
    th {
        font-size: 1.6rem;
    }
    @media all and (max-width: 768px) {
        height: 5rem;
        th {
            font-size: 1.2rem;
        }
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
    @media all and (max-width: 768px) {
        tr {
            height: 1rem;
        }
        td {
            font-size: 1rem;
        }
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
    @media all and (max-width: 768px) {
        padding: 1.5rem 0;
        margin: 0;
        font-size: 1.6rem;
    }
`
export const BotonOrden = styled.button`
    height: 3.5rem;
    width: 2.5rem;
    margin: 1rem;
    background: #f7797d;
    color: #FDB99B;
    border: 2px solid #f7797d;
    font-size: 1.6rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        background: transparent;
        color: #f7797d;
    }
`
export const ContenedorFiltro = styled.div`
    display: flex;
    align-items: center;
`
export const BotonFiltro = styled.button`
    height: 3.5rem;
    width: 100px;
    margin: 0 1.5rem;
    background: #f7797d;
    border: 2px solid #f7797d;
    border-radius: 5px;
    color: #FDB99B;
    font-weight: 600;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        background: transparent;
        color: #f7797d;
    }
`