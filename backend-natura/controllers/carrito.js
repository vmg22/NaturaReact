const { conection } = require("../config/db");

// Obtener todos los elementos del carrito
const getAllCarrito = (req, res) => {
  const consulta = "SELECT * FROM carrito;";
  conection.query(consulta, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Obtener un elemento del carrito por ID
const getEspecifiedCarritoId = (req, res) => {
  const { id } = req.params;
  const consulta = "SELECT * FROM carrito WHERE id = ?;";
  conection.query(consulta, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};

// Crear un nuevo elemento en el carrito
const createCarrito = (req, res) => {
  const { id_usuario, id_producto, cantidad } = req.body;
  const consulta = "INSERT INTO carrito (id_usuario, id_producto, cantidad) VALUES (?, ?, ?);";
  conection.query(consulta, [id_usuario, id_producto, cantidad], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, mensaje: "Elemento agregado al carrito" });
  });
};

// Actualizar un elemento del carrito
const updateCarrito = (req, res) => {
  const { id } = req.params;
  const { cantidad } = req.body;
  const consulta = "UPDATE carrito SET cantidad = ? WHERE id = ?;";
  conection.query(consulta, [cantidad, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: "Carrito actualizado" });
  });
};

// Eliminar un elemento del carrito
const deleteCarrito = (req, res) => {
  const { id } = req.params;
  const consulta = "DELETE FROM carrito WHERE id = ?;";
  conection.query(consulta, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: "Elemento del carrito eliminado" });
  });
};

module.exports = {getAllCarrito,getEspecifiedCarritoId,createCarrito,updateCarrito,deleteCarrito};
