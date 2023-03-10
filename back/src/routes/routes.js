const express = require("express");
const router = express.Router();

const livro = require('../controllers/livros.js');

router.get('/', livro.teste);
router.post('/livro/criar', livro.criar);
router.get('/livro/listar', livro.listar);
router.get('/livro/listar/:id', livro.listar);
router.put('/livro/alterar', livro.alterar);
router.delete('/livro/excluir/:id', livro.excluir);

module.exports = router