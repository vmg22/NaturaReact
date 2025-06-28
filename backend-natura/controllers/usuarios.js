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
  const { nombre, email, password, direccion, telefono  } = req.body;

  const rol_id = 2;

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
    const updateUsuario = (req,res) =>{
        const {id} = req.params;
        const { nombre, email, password,direccion,telefono, rol_id, fecha_registro } = req.body;

        const consulta = "UPDATE usuarios SET nombre=?, email=?, password=?, direccion=?, telefono=?, rol_id=?, fecha_registro=? WHERE id=?;"
        

        conection.query(consulta,[nombre, email, password,direccion,telefono, rol_id,fecha_registro, id],(err)=>{
            if (err) return res.status(500).json({ error: err.message });
            res.json({ mensaje: 'Usuario actualizado' });
        })
    }
 


// Eliminar usuario
const deleteUsuario = (req, res) => {
  const { id } = req.params;
  const consulta = "DELETE FROM usuarios WHERE id=?;";
  conection.query(consulta, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: "Usuario eliminado" });
  });
};

//  Login por email y password
const getEspecifiedUsuarioEmail = (req, res) => {
  const { email, password } = req.body;

  const consulta = "SELECT * FROM usuarios WHERE email = ? AND password = ?";
  conection.query(consulta, [email, password], (err, results) => {
    if (err) {
      console.error("Error en login:", err);
      return res.status(500).json({ success: false, error: "Error en servidor" });
    }

    if (results.length > 0) {
      res.json({ success: true, user: results[0] });
    } else {
      res.json({ success: false });
    }
  });
};

module.exports = {
  getAllUsuarios,
  createUsuario,
  getEspecifiedUsuarioId,
  getEspecifiedUsuarioEmail, // ← ¡esto es nuevo!
  updateUsuario,
  deleteUsuario,
};
