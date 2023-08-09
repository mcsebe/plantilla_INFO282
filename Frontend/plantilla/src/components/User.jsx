import React, { useState } from 'react';
import Formulario from './User/Formulario';
import ListaUsuarios from './User/ListaUsuario';

const User = () => {
  const handleRegistro = (nuevoUsuario) => {
    const [usuarios, setUsuarios] = useState([]);
    setUsuarios([...usuarios, nuevoUsuario]);
  };

  return (
    <div className="flex h-screen">
      <Formulario  onRegistro={handleRegistro} />
      <ListaUsuarios  />
    </div>
  );
}

export default User