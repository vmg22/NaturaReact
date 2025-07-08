const {conection} = require ("../config/db")

//Obtener todos las marcas
const getAllMarcas = (req,res) =>{
    // Primero obtenemos las columnas con SHOW COLUMNS
  const columnasQuery = "SHOW COLUMNS FROM marcas;";
  const consulta = "SELECT * FROM marcas where estado=1;";
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
}

// Obtener marca por id
const getEspecifiedMarca = (req,res) =>{
    const {id} = req.params;
    const consulta = "SELECT * FROM marcas WHERE id = ?;"

    conection.query(consulta, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
    })

}

//CREAR marca (POST)//
const createMarca = (req,res)=>{
    const { nombre } = req.body;
    const estado = 1;
    const consulta = "INSERT INTO marcas (nombre,estado) VALUES (?,?);"

    conection.query(consulta,[nombre,estado],(err,results)=>{
        if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ mensaje: 'Marca creada', id: results.insertId });
    })
}



//-ACTUALIZAR marcas (PUT)//
    const updateMarcas = (req,res) =>{
        const {id} = req.params;
        const { nombre , estado } = req.body;
        const consulta = "UPDATE marcas SET nombre = ? ,estado=? WHERE id = ?;"
        

        conection.query(consulta,[nombre,estado,id],(err, results)=>{
            if (err) return res.status(500).json({ error: err.message });
            res.json({ mensaje: 'Marca actualizada' });
        })
    }

const deleteMarca = (req,res)=>{
    const { id } = req.params;
    const estado = 0; // Desactivamos la marca en lugar de eliminarla
    const consulta = "UPDATE marcas SET estado = ? WHERE id = ?;"

    conection.query(consulta,[estado,id],(err)=>{
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: 'Marca eliminada' });
    })
}

module.exports = {getAllMarcas, createMarca, updateMarcas, getEspecifiedMarca, deleteMarca}