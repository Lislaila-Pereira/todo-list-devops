import React, { useState } from 'react';
import axios from 'axios';

const TodoItem = ({ todo, refreshTodos }) => {
    const [completed, setCompleted] = useState(todo.completed);
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);

    const handleDelete = () => {
        axios.delete(`/api/todos/${todo.id}`)
            .then(() => {
                window.location.reload();
                refreshTodos();
            })
            .catch(error => {
                console.error('Erro ao deletar tarefa:', error);
            });
    };

    const handleToggle = () => {
        axios.put(`/api/todos/${todo.id}`, { ...todo, completed: !completed })
            .then(() => {
                setCompleted(!completed);
            })
            .catch(error => {
                console.error('Erro ao atualizar tarefa:', error);
            });
    };

    const handleEdit = () => {
        axios.put(`/api/todos/${todo.id}`, { title, completed })
            .then(() => {
                setIsEditing(false);
                window.location.reload();
            })
            .catch(error => {
                console.error('Erro ao atualizar tarefa:', error);
            });
    };

    return (
        <li>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button onClick={handleEdit}>Salvar</button>
                    <button onClick={() => setIsEditing(false)}>Cancelar</button>
                </div>
            ) : (
                <div>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={handleToggle}
                    />
                    {todo.title}
                    <button onClick={() => setIsEditing(true)}>Editar</button>
                    <button onClick={handleDelete}>Deletar</button>
                </div>
            )}
        </li>
    );
};

export default TodoItem;
