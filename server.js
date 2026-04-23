const express = require('express');
const path = require('path');

const validar = require('./middlewares/validar');

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/cadastro', validar, (req, res) => {
    res.json({ mensagem: "Paciente cadastrado com sucesso "});

});

app.listen(3000, () => {
    console.log("Servidor rodando em: http://localhost:3000");
});


