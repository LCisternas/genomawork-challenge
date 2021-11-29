import styled from "styled-components";

export const ContenedorHome = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        margin: 3rem 0;
        text-align: center;
        color: #f7797d;
    }
    @media all and (max-width: 768px) {
        h1 {
            margin: 2rem;
            width: 100%;
            font-size: 2.4rem;
        }
    }
`
export const Filtros = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 768px) {
        width: 100%;
    }
`