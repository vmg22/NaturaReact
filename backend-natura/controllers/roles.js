const { conection } = require("../config/db");

// Obtener todos los roles
const getAllRoles = (req, res) => {
 // Primero obtenemos las columnas con SHOW COLUMNS
  const columnasQuery = "SHOW COLUMNS FROM roles;";
  const consulta = "SELECT * FROM roles;";
  conection.query(columnasQuery, (err, columnasResultado) => {
    if (err) return res.status(500).json({ error: err.message });

    // extraemos solo el nombre de las columnas
    const columnas = columnasResultado.map((col) => ({
     nombre: col.Field,
    tipo: col.Type,
    extra: col.Extra, // para saber si es auto_increment
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

// Obtener rol por ID
const getEspecifiedRolId = (req, res) => {
    const { id } = req.params;
    const consulta = "SELECT * FROM roles WHERE id = ?";

    conection.query(consulta, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
    });
};

// Crear nuevo rol
const createRol = (req, res) => {
    const { nombre } = req.body;
    const consulta = "INSERT INTO roles (nombre) VALUES (?)";

    conection.query(consulta, [nombre], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, mensaje: "Rol creado" });
    });
};

// Actualizar rol existente
const updateRol = (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    const consulta = "UPDATE roles SET nombre = ? WHERE id = ?";

    conection.query(consulta, [nombre, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: "Rol actualizado" });
    });
};

// Eliminar rol
const deleteRol = (req, res) => {
    const { id } = req.params;
    const consulta = "DELETE FROM roles WHERE id = ?";

    conection.query(consulta, [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: "Rol eliminado" });
    });
};

module.exports = {getAllRoles,getEspecifiedRolId,createRol,updateRol,deleteRol};
