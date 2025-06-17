import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
host: '127.0.0.1',
user: 'root',
password: 'admin',
database: 'natura_react'
});

// Verificar conexión
db.connect((err) => {
if (err) {
console.error('❌ Error al conectar a la base de datos:', err.message);
} else {
console.log('✅ Conexión exitosa a la base de datos natura_react');
}
});

// Endpoints
app.get('/api/productos', (req, res) => {
db.query('SELECT * FROM productos', (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
});

app.get('/api/categoria_tipo/:id', (req, res) => {
    const categoriaId = req.params.id;
  db.query('SELECT * FROM categoria_tipo ct JOIN categorias c on c.id = ct.id_categoria JOIN tipos t on t.id_tipo = ct.id_tipo WHERE c.id = ? ',[categoriaId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.get('/api/categoria_tipo', (req, res) => {

  db.query('SELECT * FROM categoria_tipo ', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Ruta con parámetro PRIMERO
app.get('/api/categorias/:categoria', (req, res) => {
  const categoria = req.params.categoria;
  db.query('SELECT * FROM categorias WHERE nombre = ?', [categoria], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Ruta general DESPUÉS
app.get('/api/categorias', (req, res) => {
  db.query('SELECT * FROM categorias', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});





app.get('/api/marcas', (req, res) => {
db.query('SELECT * FROM marcas', (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
});

app.get('/api/usuarios', (req, res) => {
db.query('SELECT * FROM usuarios', (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
});

app.get('/api/roles', (req, res) => {
db.query('SELECT * FROM roles', (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
});

app.get('/api/imagenes', (req, res) => {
db.query('SELECT * FROM imagenes_productos', (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
});

app.get('/api/ordenes', (req, res) => {
db.query('SELECT * FROM ordenes', (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
});

app.get('/api/carrito', (req, res) => {
db.query('SELECT * FROM carrito', (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
});

app.get('/api/reviews', (req, res) => {
db.query('SELECT * FROM reviews', (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
});

app.get('/api/descuentos', (req, res) => {
db.query('SELECT * FROM descuentos', (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
});

// Iniciar servidor
app.listen(3001, () => {
console.log('🚀 Servidor backend corriendo en puerto 3001');
});