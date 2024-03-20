import React, { useState, useEffect } from 'react';

function ListarExames() {
    const [exames, setExames] = useState([]);

    useEffect(() => {
        fetch('/api/exames/')
            .then(response => response.json())
            .then(data => setExames(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h2>Listar Exames:</h2>
            <ul>
                {exames.map(exame => (
                    <li key={exame.id}>
                        <strong>Paciente:</strong> {exame.paciente}<br />
                        <strong>Tipo:</strong> {exame.tipo}<br />
                        <strong>Resultado:</strong> {exame.resultado}<br />
                        <strong>Data:</strong> {exame.data}<br />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListarExames;