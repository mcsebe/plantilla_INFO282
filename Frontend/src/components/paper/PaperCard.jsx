const PaperCard = ({paper, usuarios}) => {
    return (
        <div className="bg-white p-4 rounded shadow-md mb-4">
            <strong>Usuario:</strong> 
            {usuarios.map((usuario) => (
                usuario.id === paper.userId ? usuario.name : null
            ))}
            <br />
            <strong>Nombre:</strong> {paper.name}<br />
            <strong>Fecha:</strong> {paper.date}<br />
            <strong>Descripcion:</strong> {paper.description}<br />
        </div>
    )
}

export  default PaperCard