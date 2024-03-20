import React, { useState } from 'react';

function CadastrarExame() {
    const [paciente, setPaciente] = useState('');
    const [tipo, setTipo] = useState('');
    const [resultado, setResultado] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        fetch('/api/cadastrar-exame/', {
            method: 'POST',
            body: JSON.stringify({ paciente, tipo, resultado }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Exame cadastrado com sucesso!');
                // Limpar o formulário após o cadastro
                setPaciente('');
                setTipo('');
                setResultado('');
            } else {
                throw new Error('Erro ao cadastrar exame.');
            }
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h2>Cadastrar Exame:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={paciente} onChange={e => setPaciente(e.target.value)} placeholder="Paciente" required /><br />
                <input type="text" value={tipo} onChange={e => setTipo(e.target.value)} placeholder="Tipo de Exame" required /><br />
                <textarea value={resultado} onChange={e => setResultado(e.target.value)} placeholder="Resultado" required /><br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadastrarExame;