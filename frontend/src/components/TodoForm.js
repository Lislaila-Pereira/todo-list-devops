import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = () => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/api/todos', { title })
            .then(() => {
                setTitle('');
                window.location.reload();
            })
            .catch(error => {
                console.error('Erro ao criar tarefa:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nova tarefa"
                required
                className="input"
            />
            <button type="submit" className="submit-button">Adicionar</button>
        </form>
    );
};

export default TodoForm;