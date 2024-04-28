const express = require('express');
const diarioController = require('../controllers/diarioController');

const router = express.Router();

router.post('/registro_stud', diarioController.registro_stud);
router.get('/obtener_stud', diarioController.obtener_stud);
router.put('/editar_user', diarioController.editarUsuario);
router.delete('/eliminar_user', diarioController.eliminarUsuario);


module.exports = router;