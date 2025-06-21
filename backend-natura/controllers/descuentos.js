const { conection } = require("../config/db");

// Obtener todos los descuentos
const getAllDescuentos = (req, res) => {
  const consulta = "SELECT * FROM descuentos;";
  conection.query(consulta, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
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
  const { codigo, porcentaje, fecha_inicio, fecha_fin } = req.body;
  const consulta = "INSERT INTO descuentos (codigo, porcentaje, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?);";
  conection.query(consulta, [codigo, porcentaje, fecha_inicio, fecha_fin], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, mensaje: "Descuento creado" });
  });
};

// Actualizar descuento
const updateDescuento = (req, res) => {
  const { id } = req.params;
  const { codigo, porcentaje, fecha_inicio, fecha_fin } = req.body;
  const consulta = "UPDATE descuentos SET codigo=?, porcentaje=?, fecha_inicio=?, fecha_fin=? WHERE id=?;";
  conection.query(consulta, [codigo, porcentaje, fecha_inicio, fecha_fin, id], (err) => {
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

