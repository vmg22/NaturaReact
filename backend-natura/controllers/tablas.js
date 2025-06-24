const { conection } = require("../config/db");

//mostrar todas las tablas de mi db
const mostrarTablas = (req, res) => {
  const consulta = "SHOW TABLES";

  conection.query(consulta, (err, results) => {
    if (err) {
      console.error("Error al mostrar tablas:", err);
      return res.status(500).json({ error: "Error al obtener tablas" });
    }

    const tablas = results.map(row => Object.values(row)[0]);
    res.json(tablas); // Envia al frontend
  });
};
module.exports = {mostrarTablas}