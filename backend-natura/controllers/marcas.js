const {conection} = require ("../config/db")

//Obtener todos las marcas
const getAllMarcas = (req,res) =>{
    const consulta = "SELECT * FROM marcas;"

    conection.query(consulta, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
    })
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
    const consulta = "INSERT INTO marcas (nombre) VALUES (?);"

    conection.query(consulta,[nombre],(err,results)=>{
        if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ mensaje: 'Marca creada', id: results.insertId });
    })
}



//-ACTUALIZAR marcas (PUT)//
    const updateMarcas = (req,res) =>{
        const {id} = req.params;
        const { nombre } = req.body;
        const consulta = "UPDATE marcas SET nombre = ? WHERE id = ?;"
        

        conection.query(consulta,[nombre,id],(err, results)=>{
            if (err) return res.status(500).json({ error: err.message });
            res.json({ mensaje: 'Marca actualizada' });
        })
    }

const deleteMarca = (req,res)=>{
    const { id } = req.params;
    const consulta = "DELETE FROM marcas WHERE id = ?;"

    conection.query(consulta,[id],(err)=>{
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: 'Marca eliminada' });
    })
}

module.exports = {getAllMarcas, createMarca, updateMarcas, getEspecifiedMarca, deleteMarca}