const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes.js');
const diarioRoutes = require('./routes/diarioRoutes.js');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '100mb', extended: true }));

// [ Rutas ] //
app.use('/auth', authRoutes);
app.use('/diario', diarioRoutes);

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});