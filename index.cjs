const express = require('express');
const db = require('./config/db.cjs'); // Importa la configuración de la base de datos
const cors = require('cors');

const app = express();
const PORT = 3002;
const usersRoutes = require('./routes/users.cjs');

app.use(cors());
app.use(express.json());

// Define tus rutas y controladores aquí (ver Paso 2)

app.use('/api', usersRoutes); // Usa las rutas de usuarios con el prefijo '/api'

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
