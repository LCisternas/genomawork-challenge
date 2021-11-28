import React from 'react';
import Navbar from '../Navbar';
import Table from '../Table';
import { ContenedorHome } from './style';

const Home = () => {
    return (
        <ContenedorHome>
            <Navbar />
            <Table />
        </ContenedorHome>
    );
}
 
export default Home;