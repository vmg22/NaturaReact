import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
host: '127.0.0.1',
user: 'root',
password: '213026',
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

//CREAR producto (POST)//
app.post('/api/productos', (req, res) => {
  const { nombre, descripcion, precio, id_categoria, id_marca } = req.body;
  const sql = 'INSERT INTO productos (nombre, descripcion, precio, id_categoria, id_marca) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [nombre, descripcion, precio, id_categoria, id_marca], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ mensaje: 'Producto creado correctamente', id: result.insertId });
  });
});

//-ACTUALIZAR producto (PUT)//
app.put('/api/productos/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, id_categoria, id_marca } = req.body;
  const sql = 'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, id_categoria = ?, id_marca = ? WHERE id = ?';
  db.query(sql, [nombre, descripcion, precio, id_categoria, id_marca, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Producto actualizado correctamente' });
  });
});

//-ELIMINAR producto (DELETE)//
app.delete('/api/productos/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM productos WHERE id = ?';
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Producto eliminado correctamente' });
  });
});

//--LEER producto específico (GET por ID)--//
app.get('/api/productos/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM productos WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
});

//------------------------------------------------//
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



//-- MARCAS --//
// LEE MARCAS --------------//
app.get('/api/marcas', (req, res) => {
db.query('SELECT * FROM marcas', (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
});

// Crear marca
app.post('/api/marcas', (req, res) => {
  const { nombre } = req.body;
  db.query('INSERT INTO marcas (nombre) VALUES (?)', [nombre], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ mensaje: 'Marca creada', id: result.insertId });
  });
});
// Obtener marca por id
app.get('/api/marcas/:id', (req, res) => {
  db.query('SELECT * FROM marcas WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
});
// Actualizar marca
app.put('/api/marcas/:id', (req, res) => {
  const { nombre } = req.body;
  db.query('UPDATE marcas SET nombre = ? WHERE id = ?', [nombre, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Marca actualizada' });
  });
});
// Eliminar marca
app.delete('/api/marcas/:id', (req, res) => {
  db.query('DELETE FROM marcas WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Marca eliminada' });
  });
});


//-- USUARIOS --//
// LEE USUARIOS --------------//

app.get('/api/usuarios', (req, res) => {
db.query('SELECT * FROM usuarios', (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
});
// Crear usuario
app.post('/api/usuarios', (req, res) => {
  const { nombre, email, password, id_rol } = req.body;
  db.query(
    'INSERT INTO usuarios (nombre, email, password, id_rol) VALUES (?, ?, ?, ?)',
    [nombre, email, password, id_rol],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId, mensaje: 'Usuario creado' });
    }
  );
});
// Obtener usuario por id
app.get('/api/usuarios/:id', (req, res) => {
  db.query('SELECT * FROM usuarios WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
});
// Actualizar usuario
app.put('/api/usuarios/:id', (req, res) => {
  const { nombre, email, password, id_rol } = req.body;
  db.query(
    'UPDATE usuarios SET nombre=?, email=?, password=?, id_rol=? WHERE id=?',
    [nombre, email, password, id_rol, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ mensaje: 'Usuario actualizado' });
    }
  );
});
// Eliminar usuario
app.delete('/api/usuarios/:id', (req, res) => {
  db.query('DELETE FROM usuarios WHERE id=?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Usuario eliminado' });
  });
});



//-- ROLES --//
// LEE ROLES --------------//

app.get('/api/roles', (req, res) => {
db.query('SELECT * FROM roles', (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
});
// Crear rol
app.post('/api/roles', (req, res) => {
  const { nombre } = req.body;
  db.query('INSERT INTO roles (nombre) VALUES (?)', [nombre], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId });
  });
});
// Obtener rol por id
app.get('/api/roles/:id', (req, res) => {
  db.query('SELECT * FROM roles WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
});
// Actualizar rol
app.put('/api/roles/:id', (req, res) => {
  const { nombre } = req.body;
  db.query('UPDATE roles SET nombre=? WHERE id=?', [nombre, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Rol actualizado' });
  });
});
// Eliminar rol
app.delete('/api/roles/:id', (req, res) => {
  db.query('DELETE FROM roles WHERE id=?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Rol eliminado' });
  });
});



//-- IMAGENES --//
// LEE IMAGENES --------------//

app.get('/api/imagenes', (req, res) => {
db.query('SELECT * FROM imagenes_productos', (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
});
// Crear imagen
app.post('/api/imagenes', (req, res) => {
  const { id_producto, url } = req.body;
  db.query(
    'INSERT INTO imagenes_productos (id_producto, url) VALUES (?, ?)',
    [id_producto, url],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId });
    }
  );
});
// Obtener imagen por id
app.get('/api/imagenes/:id', (req, res) => {
  db.query('SELECT * FROM imagenes_productos WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
});
// Actualizar imagen
app.put('/api/imagenes/:id', (req, res) => {
  const { url } = req.body;
  db.query('UPDATE imagenes_productos SET url=? WHERE id=?', [url, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Imagen actualizada' });
  });
});
// Eliminar imagen
app.delete('/api/imagenes/:id', (req, res) => {
  db.query('DELETE FROM imagenes_productos WHERE id=?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Imagen eliminada' });
  });
});
//-- ORDENES --//
// LEE ORDENES --------------//

app.get('/api/ordenes', (req, res) => {
db.query('SELECT * FROM ordenes', (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
});
// Crear orden
app.post('/api/ordenes', (req, res) => {
  const { id_usuario, total, estado } = req.body;
  db.query(
    'INSERT INTO ordenes (id_usuario, total, estado) VALUES (?, ?, ?)',
    [id_usuario, total, estado],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId });
    }
  );
});
// Obtener orden por id
app.get('/api/ordenes/:id', (req, res) => {
  db.query('SELECT * FROM ordenes WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
});
// Actualizar orden
app.put('/api/ordenes/:id', (req, res) => {
  const { estado, total } = req.body;
  db.query(
    'UPDATE ordenes SET estado=?, total=? WHERE id=?',
    [estado, total, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ mensaje: 'Orden actualizada' });
    }
  );
});
// Eliminar orden
app.delete('/api/ordenes/:id', (req, res) => {
  db.query('DELETE FROM ordenes WHERE id=?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Orden eliminada' });
  });
});
//-- CARRITO --//
// LEE CARRITO --------------//

app.get('/api/carrito', (req, res) => {
db.query('SELECT * FROM carrito', (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
});
// Crear carrito
app.post('/api/carrito', (req, res) => {
  const { id_usuario, id_producto, cantidad } = req.body;
  db.query(
    'INSERT INTO carrito (id_usuario, id_producto, cantidad) VALUES (?, ?, ?)',
    [id_usuario, id_producto, cantidad],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId });
    }
  );
});
// Obtener carrito por id
app.get('/api/carrito/:id', (req, res) => {
  db.query('SELECT * FROM carrito WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
});
// Actualizar carrito
app.put('/api/carrito/:id', (req, res) => {
  const { cantidad } = req.body;
  db.query('UPDATE carrito SET cantidad=? WHERE id=?', [cantidad, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Carrito actualizado' });
  });
});
// Eliminar carrito
app.delete('/api/carrito/:id', (req, res) => {
  db.query('DELETE FROM carrito WHERE id=?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Elemento del carrito eliminado' });
  });
});


//-- DESCUENTOS --//
// LEE DESCUENTOS --------------//  
app.get('/api/descuentos', (req, res) => {
db.query('SELECT * FROM descuentos', (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
});
// Crear descuento
app.post('/api/descuentos', (req, res) => {
  const { codigo, porcentaje, fecha_inicio, fecha_fin } = req.body;
  db.query(
    'INSERT INTO descuentos (codigo, porcentaje, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?)',
    [codigo, porcentaje, fecha_inicio, fecha_fin],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId });
    }
  );
});
// Obtener descuento por id
app.get('/api/descuentos/:id', (req, res) => {
  db.query('SELECT * FROM descuentos WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
});
// Actualizar descuento
app.put('/api/descuentos/:id', (req, res) => {
  const { codigo, porcentaje, fecha_inicio, fecha_fin } = req.body;
  db.query(
    'UPDATE descuentos SET codigo=?, porcentaje=?, fecha_inicio=?, fecha_fin=? WHERE id=?',
    [codigo, porcentaje, fecha_inicio, fecha_fin, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ mensaje: 'Descuento actualizado' });
    }
  );
});
// Eliminar descuento

app.delete('/api/descuentos/:id', (req, res) => {
  db.query('DELETE FROM descuentos WHERE id=?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Descuento eliminado' });
  });
});

// Iniciar servidor
app.listen(3001, () => {
console.log('🚀 Servidor backend corriendo en puerto 3001');
});