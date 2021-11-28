import React from 'react';
import { ContenedorTable, Tabla, Titulos, Data, Boton } from './style';

import example from './example';

const Table = () => {
    return (
        <ContenedorTable>
            <Tabla>
                <Titulos>
                    <tr>
                        <th>Nombre</th>
                        <th>Ubicación</th>
                        <th>Tipo</th>
                        <th>Calificacion</th>
                        <th>Acción</th>
                    </tr>
                </Titulos>
                <Data>
                    {example.map(restaurant => (
                        <tr key={restaurant.id}>
                            <td> {restaurant.nombre} </td>
                            <td> {restaurant.ubicacion} </td>
                            <td> {restaurant.tipo} </td>
                            <td> {restaurant.calificacion} </td>
                            <td className='acciones'>  
                                <Boton 
                                type='button'
                                
                                > <i className="far fa-edit"></i> </Boton>
                                <Boton
                                    type='button'
                                    
                                > <i className="far fa-trash-alt"></i> </Boton>
                            </td>
                        </tr>
                    ))}
                </Data>
            </Tabla>
        </ContenedorTable>
    );
}
 
export default Table;