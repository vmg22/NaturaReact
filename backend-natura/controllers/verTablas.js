const { conection } = require("../config/db");

// Obtener todos los elementos de la tabla
const getTabla = (req, res) => {
    const { nombreTabla } = req.params;

  const consulta = "SELECT * FROM ??;";
  conection.query(consulta, [nombreTabla], (err, results) => {
    if (err) {
      console.error("Error al obtener los datos:", err);
      return res.status(500).json({ error: "Error al consultar la base de datos" });
    }
    res.json(results);
  });
};


module.exports ={getTabla}