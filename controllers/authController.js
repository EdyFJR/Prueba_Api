const bcrypt = require('bcrypt');
const db = require('../config/db');
const { queryAsync } = require('../models/dbModel');

// Ruta para el Inicio de Sesion
async function InicioSesion(req, res) {
  const { nombre, password } = req.body;

  // Verificar si el usuario existe en la base de datos
  const userQuery = await queryAsync('SELECT * FROM student WHERE nombre = ? AND password = ?', [nombre, password]);
  const user = userQuery[0];

  if (!user) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
  }

  res.status(200).json({ message: 'Inicio de sesión exitoso', user });
}

// Ruta para Registrar nuevo usuario
async function Registro(req, res) {


}

module.exports = {
    InicioSesion,
    Registro,
}