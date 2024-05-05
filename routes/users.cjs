const express = require('express');
const router = express.Router();
const db = require('../config/db.cjs'); // Importa la configuración de la base de datos

// Obtener todos los usuarios
router.get('/users', (req, res) => {
    const query = 'SELECT * FROM Usuarios'; // Consulta SQL para obtener todos los usuarios

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ error: 'Error al obtener usuarios' });
        } else {
            res.status(200).json(results); // Devuelve los resultados como una respuesta JSON
        }
    });
});

// Crear un nuevo usuario
router.post('/users', (req, res) => {
    const { nombre, correo, tipo_usuario, contrasena, foto_perfil } = req.body;

    const query = 'INSERT INTO Usuarios (nombre, correo, tipo_usuario, contrasena, foto_perfil) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [nombre, correo, tipo_usuario, contrasena, foto_perfil], (error, result) => {
        if (error) {
            console.error('Error al crear un nuevo usuario:', error);
            res.status(500).json({ error: 'Error al crear un nuevo usuario' });
        } else {
            res.status(201).json({ message: 'Usuario creado exitosamente' });
        }
    });
});

// Actualizar un usuario existente
router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const { nombre, correo, tipo_usuario, contrasena, foto_perfil } = req.body;

    const query = 'UPDATE Usuarios SET nombre = ?, correo = ?, tipo_usuario = ?, contrasena = ?, foto_perfil = ? WHERE id = ?';

    db.query(query, [nombre, correo, tipo_usuario, contrasena, foto_perfil, userId], (error, results) => {
        if (error) {
            console.error('Error al actualizar el usuario:', error);
            res.status(500).json({ error: 'Error al actualizar el usuario' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Usuario actualizado exitosamente' });
            } else {
                res.status(404).json({ message: 'Usuario no encontrado' });
            }
        }
    });
});

// Eliminar un usuario
router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;

    const query = 'DELETE FROM Usuarios WHERE id = ?';

    db.query(query, [userId], (error, results) => {
        if (error) {
            console.error('Error al eliminar el usuario:', error);
            res.status(500).json({ error: 'Error al eliminar el usuario' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Usuario eliminado exitosamente' });
            } else {
                res.status(404).json({ message: 'Usuario no encontrado' });
            }
        }
    });
});

// Obtener todos los sistemas
router.get('/sistemas', (req, res) => {
    const query = 'SELECT * FROM Sistemas';

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener sistemas:', error);
            res.status(500).json({ error: 'Error al obtener sistemas' });
        } else {
            res.status(200).json(results);
        }
    });
});

// Obtener todos los modelos
router.get('/modelos', (req, res) => {
    const query = 'SELECT * FROM Modelos';

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener modelos:', error);
            res.status(500).json({ error: 'Error al obtener modelos' });
        } else {
            res.status(200).json(results);
        }
    });
});

// Obtener todos los equipos
router.get('/equipos', (req, res) => {
    const query = 'SELECT E.*, M.nombre AS modelo_nombre, S.nombre_sistema AS sistema_nombre ' +
        'FROM Equipos E ' +
        'INNER JOIN Modelos M ON E.id_modelo = M.id ' +
        'INNER JOIN Sistemas S ON E.id_sistema = S.id';

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener equipos:', error);
            res.status(500).json({ error: 'Error al obtener equipos' });
        } else {
            res.status(200).json(results);
        }
    });
});

// Obtener todas las rondas
router.get('/rondas', (req, res) => {
    const query = 'SELECT R.*, S.nombre_sistema AS sistema_nombre ' +
        'FROM Rondas R ' +
        'INNER JOIN Sistemas S ON R.id_sistema = S.id';

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener rondas:', error);
            res.status(500).json({ error: 'Error al obtener rondas' });
        } else {
            res.status(200).json(results);
        }
    });
});

router.post('/sistemas', (req, res) => {
    const { id_usuario, nombre_sistema, imagen_sistema, id_sistema } = req.body;

    const query = 'INSERT INTO Sistemas (id_usuario, nombre_sistema, imagen_sistema, id_sistema) VALUES (?, ?, ?, ?)';
    db.query(query, [id_usuario, nombre_sistema, imagen_sistema, id_sistema], (error, result) => {
        if (error) {
            console.error('Error al crear un nuevo sistema:', error);
            res.status(500).json({ error: 'Error al crear un nuevo sistema' });
        } else {
            res.status(201).json({ message: 'Sistema creado exitosamente' });
        }
    });
});

router.post('/modelos', (req, res) => {
    const { nombre, imagen } = req.body;

    const query = 'INSERT INTO Modelos (nombre, imagen) VALUES (?, ?)';
    db.query(query, [nombre, imagen], (error, result) => {
        if (error) {
            console.error('Error al crear un nuevo modelo:', error);
            res.status(500).json({ error: 'Error al crear un nuevo modelo' });
        } else {
            res.status(201).json({ message: 'Modelo creado exitosamente' });
        }
    });
});

router.post('/equipos', (req, res) => {
    const { id_sistema, nombre_equipo, imagen_equipo, id_equipo, id_modelo } = req.body;

    const query = 'INSERT INTO Equipos (id_sistema, nombre_equipo, imagen_equipo, id_equipo, id_modelo) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [id_sistema, nombre_equipo, imagen_equipo, id_equipo, id_modelo], (error, result) => {
        if (error) {
            console.error('Error al crear un nuevo equipo:', error);
            res.status(500).json({ error: 'Error al crear un nuevo equipo' });
        } else {
            res.status(201).json({ message: 'Equipo creado exitosamente' });
        }
    });
});


router.post('/rondas', (req, res) => {
    const { id_sistema, fecha } = req.body;

    // Modificar la consulta para que MySQL genere automáticamente un valor para el campo id
    const query = 'INSERT INTO Rondas (id, id_sistema, fecha) VALUES (UUID(), ?, ?)';

    db.query(query, [id_sistema, fecha], (error, result) => {
        if (error) {
            console.error('Error al crear una nueva ronda:', error);
            res.status(500).json({ error: 'Error al crear una nueva ronda' });
        } else {
            res.status(201).json({ message: 'Ronda creada exitosamente' });
        }
    });
});


router.put('/sistemas/:id', (req, res) => {
    const sistemaId = req.params.id;
    const { id_usuario, nombre_sistema, imagen_sistema, id_sistema } = req.body;

    const query = 'UPDATE Sistemas SET id_usuario = ?, nombre_sistema = ?, imagen_sistema = ?, id_sistema = ? WHERE id = ?';

    db.query(query, [id_usuario, nombre_sistema, imagen_sistema, id_sistema, sistemaId], (error, results) => {
        if (error) {
            console.error('Error al actualizar el sistema:', error);
            res.status(500).json({ error: 'Error al actualizar el sistema' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Sistema actualizado exitosamente' });
            } else {
                res.status(404).json({ message: 'Sistema no encontrado' });
            }
        }
    });
});

router.put('/modelos/:id', (req, res) => {
    const modeloId = req.params.id;
    const { nombre, imagen } = req.body;

    const query = 'UPDATE Modelos SET nombre = ?, imagen = ? WHERE id = ?';

    db.query(query, [nombre, imagen, modeloId], (error, results) => {
        if (error) {
            console.error('Error al actualizar el modelo:', error);
            res.status(500).json({ error: 'Error al actualizar el modelo' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Modelo actualizado exitosamente' });
            } else {
                res.status(404).json({ message: 'Modelo no encontrado' });
            }
        }
    });
});

router.put('/equipos/:id', (req, res) => {
    const equipoId = req.params.id;
    const { id_sistema, nombre_equipo, imagen_equipo, id_equipo, id_modelo } = req.body;

    const query = 'UPDATE Equipos SET id_sistema = ?, nombre_equipo = ?, imagen_equipo = ?, id_equipo = ?, id_modelo = ? WHERE id = ?';

    db.query(query, [id_sistema, nombre_equipo, imagen_equipo, id_equipo, id_modelo, equipoId], (error, results) => {
        if (error) {
            console.error('Error al actualizar el equipo:', error);
            res.status(500).json({ error: 'Error al actualizar el equipo' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Equipo actualizado exitosamente' });
            } else {
                res.status(404).json({ message: 'Equipo no encontrado' });
            }
        }
    });
});

router.put('/rondas/:id', (req, res) => {
    const rondaId = req.params.id;
    const { id_sistema, fecha } = req.body;

    const query = 'UPDATE Rondas SET id_sistema = ?, fecha = ? WHERE id = ?';

    db.query(query, [id_sistema, fecha, rondaId], (error, results) => {
        if (error) {
            console.error('Error al actualizar la ronda:', error);
            res.status(500).json({ error: 'Error al actualizar la ronda' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Ronda actualizada exitosamente' });
            } else {
                res.status(404).json({ message: 'Ronda no encontrada' });
            }
        }
    });
});


// Ruta DELETE para eliminar un sistema por su ID
router.delete('/sistemas/:id', (req, res) => {
    const sistemaId = req.params.id;

    const query = 'DELETE FROM Sistemas WHERE id = ?';

    db.query(query, [sistemaId], (error, results) => {
        if (error) {
            console.error('Error al eliminar el sistema:', error);
            res.status(500).json({ error: 'Error al eliminar el sistema' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Sistema eliminado exitosamente' });
            } else {
                res.status(404).json({ message: 'Sistema no encontrado' });
            }
        }
    });
});

// Ruta DELETE para eliminar un modelo por su ID
router.delete('/modelos/:id', (req, res) => {
    const modeloId = req.params.id;

    const query = 'DELETE FROM Modelos WHERE id = ?';

    db.query(query, [modeloId], (error, results) => {
        if (error) {
            console.error('Error al eliminar el modelo:', error);
            res.status(500).json({ error: 'Error al eliminar el modelo' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Modelo eliminado exitosamente' });
            } else {
                res.status(404).json({ message: 'Modelo no encontrado' });
            }
        }
    });
});

// Ruta DELETE para eliminar un equipo por su ID
router.delete('/equipos/:id', (req, res) => {
    const equipoId = req.params.id;

    const query = 'DELETE FROM Equipos WHERE id = ?';

    db.query(query, [equipoId], (error, results) => {
        if (error) {
            console.error('Error al eliminar el equipo:', error);
            res.status(500).json({ error: 'Error al eliminar el equipo' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Equipo eliminado exitosamente' });
            } else {
                res.status(404).json({ message: 'Equipo no encontrado' });
            }
        }
    });
});

// Ruta DELETE para eliminar una ronda por su ID
router.delete('/rondas/:id', (req, res) => {
    const rondaId = req.params.id;

    const query = 'DELETE FROM Rondas WHERE id = ?';

    db.query(query, [rondaId], (error, results) => {
        if (error) {
            console.error('Error al eliminar la ronda:', error);
            res.status(500).json({ error: 'Error al eliminar la ronda' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Ronda eliminada exitosamente' });
            } else {
                res.status(404).json({ message: 'Ronda no encontrada' });
            }
        }
    });
});

module.exports = router;
