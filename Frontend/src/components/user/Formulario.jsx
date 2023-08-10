import React, { useState } from 'react';
import clientAxios from '../config/clienteAxios';


const Formulario = () => {
    const [nombre, setNombre] = useState('');
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit =  async(e) => {
    e.preventDefault();

    try {
      
        const {data} = await clientAxios.post(`/users`, {
                name : nombre, 
                rut : rut, 
                mail: email
                
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
            RUT
          </label>
          <input
            type="text"
            id="rut"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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