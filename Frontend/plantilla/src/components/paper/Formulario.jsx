import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';


const Formulario = () => {
  const [idUsuario, setIdUsuario] = useState('');
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const [usuarios, setUsuarios] = useState('');
  useEffect(() => {

      const fetchPosts = async () => {
          const res = await clientAxios.get('/users/');
          setUsuarios(res.data.data);
        };
        fetchPosts();

  }, [])

  const handleSubmit =  async(e) => {
    e.preventDefault();

    try {
      
        const {data} = await clientAxios.post(`/papers`, {
                userId: idUsuario,
                name : nombre, 
                date : fecha, 
                description: descripcion
                
         })
    } catch (error) {
        console.log(error);
    }
    window.location.reload();


  };

  return (
    <div className="w-1/2 p-4 bg-white  shadow-md">
      <h2 className="text-xl font-semibold mb-4">Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label htmlFor="nombre" className="block font-medium mb-1">
            Usuario
          </label>
          {usuarios.length > 0 ? (
            <select value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)} className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500">
              <option value="" hidden>Selecciona una opción</option>
              {usuarios.map((usuario) => (
                    <option value={usuario.id}> {usuario.name}</option>
              ))}
            </select>) : (
              <li>No hay usuarios registrados.</li>
            )}
        </div>
        <div className="mb-4">
          <label htmlFor="nombre" className="block font-medium mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rut" className="block font-medium mb-1">
            Fecha
          </label>
          <input
            type="date"
            id="fecha"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="descripcion" className="block font-medium mb-1">
            Descripción
          </label>
          <input
            type="text"
            id="descripcion"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
    </div>
  );
    

}


export default Formulario