
import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import UsuarioCard from './UsuarioCard';
function ListaUsuarios() {
    const [usuarios , setUsuario ] = useState([]);
    useEffect (() => {
        //  clientAxios.get(`/users/`).then(res => {
        //     setUsuario(res.data)
        //     console.log(usuarios)
        // }).catch(error =>{
        //     console.log("Error... ")
        // })


        const fetchPosts = async () => {
            const res = await clientAxios.get('/users/');
            setUsuario(res.data.data);
          };
          fetchPosts();

          console.log(usuarios)
    }, [])
    return (
        <div className="w-1/2 bg-gray-100 p-4">
          <h2 className="text-xl font-semibold mb-4">Usuarios Registrados</h2>
          <ul>
            {usuarios.length > 0 ? (
              usuarios.map((usuario, index) => (
                    <UsuarioCard key={index} usuario={usuario}/>
              ))
            ) : (
              <li>No hay usuarios registrados.</li>
            )}
          </ul>
        </div>
      );  
}

export default ListaUsuarios;
