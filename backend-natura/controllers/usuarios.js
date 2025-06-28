const { conection } = require("../config/db");

// Obtener todos los usuarios
const getAllUsuarios = (req, res) => {
  const columnasQuery = "SHOW COLUMNS FROM usuarios;";
  const consulta = "SELECT * FROM usuarios;";
  conection.query(columnasQuery, (err, columnasResultado) => {
    if (err) return res.status(500).json({ error: err.message });

    const columnas = columnasResultado.map((col) => ({
      nombre: col.Field,
      tipo: col.Type,
      extra: col.Extra,
    }));

    conection.query(consulta, (err2, datosResultado) => {
      if (err2) return res.status(500).json({ error: err2.message });

      res.json({
        columnas,
        datos: datosResultado,
      });
    });
  });
};

// Obtener usuario por ID
const getEspecifiedUsuarioId = (req, res) => {
  const { id } = req.params;
  const consulta = "SELECT * FROM usuarios WHERE id = ?;";
  conection.query(consulta, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};

// Crear usuario
const createUsuario = (req, res) => {
  const { nombre, email, password, direccion, telefono, rol_id } = req.body;
  const consulta =
    "INSERT INTO usuarios (nombre, email, password, direccion, telefono, rol_id) VALUES (?, ?, ?, ?, ?, ?);";

  conection.query(
    consulta,
    [nombre, email, password, direccion, telefono, rol_id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: results.insertId, mensaje: "Usuario creado" });
    }
  );
};

// Actualizar usuario
const updateUsuario = (req, res) => {
  const { id } = req.params;
  const { nombre, email, password, direccion, telefono, rol_id, fecha_registro } = req.body;

  const consulta = "UPDATE usuarios SET nombre=?, email=?, password=?, direccion=?, telefono=?, rol_id=?, fecha_registro=? WHERE id=?;";

  conection.query(consulta, [nombre, email, password, direccion, telefono, rol_id, fecha_registro, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Usuario actualizado' });
  });
};

// Eliminar usuario
const deleteUsuario = (req, res) => {
  const { id } = req.params;
  const consulta = "DELETE FROM usuarios WHERE id=?;";
  conection.query(consulta, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: "Usuario eliminado" });
  });
};

// Login con validación de usuario, contraseña y rol
const getEspecifiedUsuarioEmail = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Faltan datos" });
  }

  const sql = `
    SELECT u.id, u.nombre, u.email, u.password, r.id AS rol_id, r.nombre AS rol
    FROM usuarios u
    JOIN roles r ON u.rol_id = r.id
    WHERE u.email = ?
  `;

  conection.query(sql, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, error: err.message });
    }

    if (results.length === 0) {
      return res.status(401).json({ success: false, message: "Usuario no encontrado" });
    }

    const usuario = results[0];

    if (usuario.password !== password) {
      return res.status(401).json({ success: false, message: "Contraseña incorrecta" });
    }

    // Eliminar la contraseña del resultado
    delete usuario.password;

    return res.json({
      success: true,
      usuario,
    });
  });

};

module.exports = {
  getAllUsuarios,
  createUsuario,
  getEspecifiedUsuarioId,
  getEspecifiedUsuarioEmail,
  updateUsuario,
  deleteUsuario,
};
