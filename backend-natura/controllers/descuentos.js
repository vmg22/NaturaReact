const { conection } = require("../config/db");

// Obtener todos los descuentos
const getAllDescuentos = (req, res) => {
// Primero obtenemos las columnas con SHOW COLUMNS
  const columnasQuery = "SHOW COLUMNS FROM descuentos;";
  const consulta = "SELECT * FROM descuentos;";
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

// Obtener descuento por ID
const getEspecifiedDescuentoId = (req, res) => {
  const { id } = req.params;
  const consulta = "SELECT * FROM descuentos WHERE id = ?;";
  conection.query(consulta, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};

// Crear descuento
const createDescuento = (req, res) => {
  const { producto_id, porcentaje, fecha_inicio, fecha_fin } = req.body;
  const consulta = "INSERT INTO descuentos (producto_id, porcentaje, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?);";
  conection.query(consulta, [producto_id, porcentaje, fecha_inicio, fecha_fin], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, mensaje: "Descuento creado" });
  });
};

// Actualizar descuento
const updateDescuento = (req, res) => {
  const { id } = req.params;
  const { producto_id, porcentaje, fecha_inicio, fecha_fin } = req.body;
  const consulta = "UPDATE descuentos SET producto_id=?, porcentaje=?, fecha_inicio=?, fecha_fin=? WHERE id=?;";
  conection.query(consulta, [producto_id, porcentaje, fecha_inicio, fecha_fin, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: "Descuento actualizado" });
  });
};

// Eliminar descuento
const deleteDescuento = (req, res) => {
  const { id } = req.params;
  const consulta = "DELETE FROM descuentos WHERE id = ?;";
  conection.query(consulta, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: "Descuento eliminado" });
  });
};

module.exports = {getAllDescuentos,getEspecifiedDescuentoId,createDescuento,updateDescuento,deleteDescuento};

