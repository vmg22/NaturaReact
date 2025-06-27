const { conection } = require("../config/db");

// Obtener todas las imágenes
const getAllImagenes = (req, res) => {
  // Primero obtenemos las columnas con SHOW COLUMNS
  const columnasQuery = "SHOW COLUMNS FROM imagenes_productos;";
  const consulta = "SELECT * FROM imagenes_productos;";
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

// Obtener una imagen por ID
const getEspecifiedImagenId = (req, res) => {
  const { id } = req.params;
  const consulta = "SELECT * FROM imagenes_productos WHERE id = ?;";
  conection.query(consulta, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};

// Crear una nueva imagen
const createImagen = (req, res) => {
  const {producto_id, url_imagen} = req.body;
  const consulta = "INSERT INTO imagenes_productos (producto_id, url_imagen) VALUES (?, ?);";
  conection.query(consulta, [producto_id, url_imagen], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, mensaje: "Imagen creada" });
  });
};

// Actualizar imagen
const updateImagen = (req, res) => {
  const { id } = req.params;
  const { url_imagen } = req.body;
  const consulta = "UPDATE imagenes_productos SET url_imagen = ? WHERE id = ?;";
  conection.query(consulta, [url_imagen, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: "Imagen actualizada" });
  });
};

// Eliminar imagen
const deleteImagen = (req, res) => {
  const { id } = req.params;
  const consulta = "DELETE FROM imagenes_productos WHERE id = ?;";
  conection.query(consulta, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: "Imagen eliminada" });
  });
};

module.exports = {getAllImagenes,getEspecifiedImagenId,createImagen,updateImagen,deleteImagen};
