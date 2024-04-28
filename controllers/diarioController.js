const { queryAsync } = require('../models/dbModel');

async function registro_stud(req, res) {
    const stud = req.body;

    try {
        // Insertamos los datos generales del alumno
        const datosGeneralesQuery = 'INSERT INTO student (clave, matricula, paterno, materno, nombre) VALUES (?,?,?,?,?)';
        const datosGeneralesValues = [stud.clave, stud.matricula, stud.paterno, stud.materno, stud.nombre];
        await queryAsync(datosGeneralesQuery, datosGeneralesValues);

        console.log('El registro se completó correctamente');
        res.status(201).json({ message: 'alumno registrado correctamente' });
    } catch (error) {
        console.error('Error al registrar alumno:', error);
        res.status(500).json({ error: 'Hubo un error al registrar el alumno' });
    }
}

//GET DE FUNCIONES
async function obtener_stud(req, res) {
    try {
        // Consultamos todas las metas terapéuticas
        const query = 'SELECT * FROM student';
        const results = await queryAsync(query);

        res.status(200).json(results);
    } catch (error) {
        console.error('Error al obtener al estudiante:', error);
        res.status(500).json({ error: 'Hubo un error al obtener al estudiante' });
    }
}

// Editar usuario
async function editarUsuario(req, res) {
    const { id, llave, license, paterno, materno, name, password } = req.body;
    try {
        const query = 'UPDATE student SET llave = ?, license = ?, paterno = ?, materno = ?, name = ?, password = ? WHERE id = ?';
        const values = [llave, license, paterno, materno, name, password, id];
        await queryAsync(query, values);
        console.log('Usuario editado correctamente');
        res.status(200).json({ message: 'Usuario editado correctamente' });
    } catch (error) {
        console.error('Error al editar usuario:', error);
        res.status(500).json({ error: 'Hubo un error al editar el usuario' });
    }
}

// Eliminar usuario
async function eliminarUsuario(req, res) {
    const { id } = req.body;

    try {
        const query = 'DELETE FROM student WHERE id = ?';
        await queryAsync(query, [id]);

        console.log('Usuario eliminado correctamente');
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({ error: 'Hubo un error al eliminar el usuario' });
    }
}

module.exports = {
    registro_stud,
    obtener_stud,
    editarUsuario,
    eliminarUsuario,
};