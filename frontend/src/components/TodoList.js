import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const refreshTodos = () => {
        axios.get('/api/todos')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setTodos(response.data);
                } else {
                    setTodos([]);
                }
            })
            .catch(error => {
                console.error('Erro ao buscar tarefas:', error);
            });
    };

    useEffect(() => {
        refreshTodos();
    }, []);

    return (
        <ul className="todo-list">
            {Array.isArray(todos) && todos.length > 0 ? (
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} refreshTodos={refreshTodos} />
                ))
            ) : (
                <p>Não há tarefas disponíveis.</p>
            )}
        </ul>
    );
};

export default TodoList;