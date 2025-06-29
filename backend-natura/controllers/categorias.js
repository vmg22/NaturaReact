const { conection } = require("../config/db");

//Obtener todos las categorias
const getAllCategorias = (req, res) => {
  // Primero obtenemos las columnas con SHOW COLUMNS

  const columnasQuery = "SHOW COLUMNS FROM categorias;";
  const consulta = "SELECT * FROM categorias;";

  conection.query(columnasQuery, (err, columnasResultado) => {
    if (err) return res.status(500).json({ error: err.message });

    // extraemos solo el nombre,tipo, y si es auto_increment de las columnas
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

// Obtener categoria especifica por nombre
const getEspecifiedCategorias = (req, res) => {
  const categoria = req.params.categoria;
  const consulta = "SELECT * FROM categorias WHERE nombre = ?;";

  conection.query(consulta, [categoria], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

//CREAR categorias (POST)//
const createCategoria = (req, res) => {
  const columnasQuery = "SHOW COLUMNS FROM categorias;";
  const consulta =
    "INSERT INTO categorias (nombre, descripcion, pregunta) VALUES (?, ?, ?);";
  const { nombre, descripcion, pregunta } = req.body;

  conection.query(columnasQuery, (err, columnasResultado) => {
    if (err) return res.status(500).json({ error: err.message });

    const columnas = columnasResultado.map((col) => ({
    nombre: col.Field,
    tipo: col.Type,
    extra: col.Extra, // para saber si es auto_increment
    }));

    conection.query(
      consulta,
      [nombre, descripcion, pregunta],
      (err2, datosResultado) => {
        if (err2) return res.status(500).json({ error: err2.message });

        res.status(201).json({
          mensaje: "Categoria creada correctamente",
          id: datosResultado.insertId,
          columnas,
        });
      }
    );
  });
};

//-ACTUALIZAR categorias (PUT)//
const updateCategoria = (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, pregunta } = req.body;

  const consulta =
    "UPDATE categorias SET nombre = ?, descripcion = ?, pregunta = ? WHERE id = ?;";

  conection.query(consulta, [nombre, descripcion, pregunta, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: "Categoria actualizada correctamente" });
  });
};

//-ELIMINAR categorias (DELETE)//

const deleteCategoria = (req, res) => {
  const { id } = req.params;
  const consulta = "DELETE FROM categorias WHERE id = ?;";

  conection.query(consulta, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: "Categoria eliminada correctamente" });
  });
};

module.exports = {
  getAllCategorias,
  createCategoria,
  updateCategoria,
  deleteCategoria,
  getEspecifiedCategorias
};
