import React, { useState } from 'react';
import Formulario from './paper/Formulario';
import ListaPapers from './paper/ListaPapers';

const Paper = () => {
  const handleRegistro = (nuevoPaper) => {
    const [papers, setPapers] = useState([]);
    setPapers([...papers, nuevoPaper]);
  };

  return (
    <div className="flex h-screen">
      <Formulario  onRegistro={handleRegistro} />
      <ListaPapers  />
    </div>
  );
}

export default Paper