import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ refreshTodos }) => {
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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nova tarefa"
                required
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
