const {conection} = require ("../config/db")


//Obtener todos las categorias
const getAllCategorias = (req,res) =>{
    const consulta = "select * from categorias;"

    conection.query(consulta, (err, results) => {
    if (err) throw err
    res.json(results)
    })
}

// Obtener categoria especifica por nombre
const getEspecifiedCategorias = (req,res) =>{
    const categoria = req.params.categoria;
    const consulta = "SELECT * FROM categorias WHERE nombre = ?;"

    conection.query(consulta, [categoria], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
    })

}

//CREAR categorias (POST)//
const createCategoria = (req,res)=>{
    const consulta = "INSERT INTO categorias (nombre, descripcion, pregunta) VALUES (?, ?, ?);"
    const { nombre, descripcion, pregunta } = req.body;

    conection.query(consulta,[nombre, descripcion, pregunta],(err,results)=>{
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ mensaje: 'Categoria creada correctamente', id: results.insertId })
    })
}

//-ACTUALIZAR categorias (PUT)//
    const updateCategoria = (req,res) =>{
        const {id} = req.params;
        const { nombre, descripcion, pregunta } = req.body;

        const consulta = "UPDATE categorias SET nombre = ?, descripcion = ?, pregunta = ? WHERE id = ?;"
        

        conection.query(consulta,[nombre, descripcion, pregunta,id],(err)=>{
            if (err) return res.status(500).json({ error: err.message });
            res.json({ mensaje: 'Categoria actualizada correctamente' });
        })
    }

//-ELIMINAR categorias (DELETE)//

const deleteCategoria = (req,res)=>{
    const { id } = req.params;
    const consulta = "DELETE FROM categorias WHERE id = ?;"

    conection.query(consulta,[id],(err)=>{
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: 'Categoria eliminada correctamente' });
    })
}


module.exports = {getAllCategorias, createCategoria, updateCategoria, deleteCategoria, getEspecifiedCategorias}