const { conection } = require("../config/db");

// Obtener todas las órdenes
const getAllOrdenes = (req, res) => {
    // Primero obtenemos las columnas con SHOW COLUMNS
  const columnasQuery = "SHOW COLUMNS FROM ordenes;";
  const consulta = "SELECT * FROM ordenes;";
  conection.query(columnasQuery, (err, columnasResultado) => {
    if (err) return res.status(500).json({ error: err.message });

    // extraemos solo el nombre de las columnas
    const columnas = columnasResultado.map(col => col.Field);

    conection.query(consulta, (err2, datosResultado) => {
      if (err2) return res.status(500).json({ error: err2.message });

      res.json({
        columnas,
        datos: datosResultado,
      });
    });
  });
};

// Obtener orden por ID
const getEspecifiedOrdenId = (req, res) => {
    const { id } = req.params;
    const consulta = "SELECT * FROM ordenes WHERE id = ?;";
    conection.query(consulta, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
    });
};

// Crear una nueva orden
const createOrden = (req, res) => {
    const { id_usuario, total, estado } = req.body;
    const consulta = "INSERT INTO ordenes (id_usuario, total, estado) VALUES (?, ?, ?);";
    conection.query(consulta, [id_usuario, total, estado], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId });
    });
};

// Actualizar una orden
const updateOrden = (req, res) => {
    const { id } = req.params;
    const { estado, total } = req.body;
    const consulta = "UPDATE ordenes SET estado=?, total=? WHERE id=?;";
    conection.query(consulta, [estado, total, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: "Orden actualizada" });
    });
};

// Eliminar una orden
const deleteOrden = (req, res) => {
    const { id } = req.params;
    const consulta = "DELETE FROM ordenes WHERE id=?;";
    conection.query(consulta, [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: "Orden eliminada" });
    });
};

module.exports = {getAllOrdenes,getEspecifiedOrdenId,createOrden,updateOrden,deleteOrden};
