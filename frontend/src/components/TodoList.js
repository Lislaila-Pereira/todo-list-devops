import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('/api/todos')
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar tarefas:', error);
            });
    }, []);

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} refreshTodos={() => setTodos(todos)} />
            ))}
        </ul>
    );
};

export default TodoList;