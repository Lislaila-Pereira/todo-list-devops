const db = require('../config/db');

// Modelo para tarefas
const Todo = {
    // Método para buscar todas as tarefas
    getAll: (callback) => {
        const query = 'SELECT * FROM todos';
        db.query(query, callback);
    },

    // Método para buscar uma tarefa por ID
    getById: (id, callback) => {
        const query = 'SELECT * FROM todos WHERE id = ?';
        db.query(query, [id], callback);
    },

    // Método para criar uma nova tarefa
    create: (title, callback) => {
        const query = 'INSERT INTO todos (title) VALUES (?)';
        db.query(query, [title], callback);
    },

    // Método para atualizar uma tarefa por ID
    update: (id, title, completed, callback) => {
        const query = 'UPDATE todos SET title = ?, completed = ? WHERE id = ?';
        db.query(query, [title, completed, id], callback);
    },

    // Método para deletar uma tarefa por ID
    delete: (id, callback) => {
        const query = 'DELETE FROM todos WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Todo;
