import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const refreshTodos = () => {
        axios.get('/api/todos')
            .then(response => {
                setTodos(response.data);
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
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} refreshTodos={refreshTodos} />
            ))}
        </ul>
    );
};

export default TodoList;