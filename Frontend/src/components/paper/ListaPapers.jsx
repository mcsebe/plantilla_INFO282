
import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import PaperCard from './PaperCard';

function ListaPapers() {
    const [papers , setPaper ] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    useEffect (() => {

        const fetchPosts = async () => {
            const res = await clientAxios.get('/papers/');
            setPaper(res.data.data);
          };
          fetchPosts();
        
          const fetchPosts2 = async () => {
            const res = await clientAxios.get('/users/');
            setUsuarios(res.data.data);
          };
          fetchPosts2();

    }, [])


    return (
        <div className="w-1/2 bg-gray-100 p-4">
          <h2 className="text-xl font-semibold mb-4">Papers Registrados</h2>
          <ul>
            {papers.length > 0 ? (
              papers.map((paper, index) => (
                    <PaperCard key={index} paper={paper} usuarios={usuarios}/>
              ))
            ) : (
              <li>No hay papers registrados.</li>
            )}
          </ul>
        </div>
      );  
}

export default ListaPapers;
