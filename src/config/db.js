const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gerenciamentohouse',
});

connection.connect((err) => {
    if (err) return console.error('Erro ao conectar no MySQL:', err);

    console.log('Conectado ao MySQL!');
});

module.exports = connection;