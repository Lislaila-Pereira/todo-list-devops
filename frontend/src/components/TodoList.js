import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        //Buscar todas as tarefas
        axios.get('/api/todos')
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar tarefas:', error);
            });
        
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} refreshTodos={() => setTodos([...todos])} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
