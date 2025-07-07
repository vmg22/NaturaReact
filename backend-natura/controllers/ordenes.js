const { conection } = require("../config/db");

// Obtener todas las órdenes
const getAllOrdenes = (req, res) => {
    // Primero obtenemos las columnas con SHOW COLUMNS
  const columnasQuery = "SHOW COLUMNS FROM ordenes;";
  const consulta = "SELECT * FROM ordenes where estado =1 ;";
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
  const { usuario_id, total,estado_orden } = req.body;
  const fecha = new Date(); // Genera la fecha actual
   // ← definilo acá
  const estado = 1;

  const consulta = "INSERT INTO ordenes (usuario_id, fecha, total, estado_orden, estado) VALUES (?, ?, ?, ?, ?)";
  conection.query(consulta, [usuario_id, fecha, total, estado_orden, estado], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId });
  });
};

// Actualizar una orden
const updateOrden = (req, res) => {
    const { id } = req.params;
    const { estado_orden, total,estado } = req.body;
    const consulta = "UPDATE ordenes SET estado_orden=?, total=?, estado=? WHERE id=?;";
    conection.query(consulta, [estado_orden, total, estado, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: "Orden actualizada" });
    });
};

// Eliminar una orden
const deleteOrden = (req, res) => {
    const { id } = req.params;
    const estado = 0; // Cambiamos el estado a 0 en lugar de eliminar
    const consulta = "UPDATE ordenes SET estado = ? WHERE id = ?";
    conection.query(consulta, [estado,id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: "Orden eliminada" });
    });
};


module.exports = {getAllOrdenes,getEspecifiedOrdenId,createOrden,updateOrden,deleteOrden};
