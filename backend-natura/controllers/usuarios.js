const {conection} = require ("../config/db")

//Obtener todos los usuarios
const getAllUsuarios = (req,res) =>{
    const consulta = "SELECT * FROM usuarios;"

    conection.query(consulta, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
    })
}

// Obtener usuario por id
const getEspecifiedUsuarioId = (req,res) =>{
    const {id} = req.params;
    const consulta = "SELECT * FROM usuarios WHERE id = ?;"

    conection.query(consulta, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
    })

}

// crear usuario
const createUsuario = (req,res)=>{
    const { nombre, email, password,direccion,telefono, rol_id } = req.body;
    const consulta = "INSERT INTO usuarios (nombre, email, password,direccion, telefono,rol_id) VALUES (?, ?, ?, ?,?,?);"

    conection.query(consulta,[nombre, email, password,direccion,telefono, rol_id],(err,results)=>{
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: results.insertId, mensaje: 'Usuario creado' });
    })
}

// Actualizar usuario
    const updateUsuario = (req,res) =>{
        const {id} = req.params;
        const { nombre, email, password,direccion,telefono, rol_id } = req.body;

        const consulta = "UPDATE usuarios SET nombre=?, email=?, password=?, direccion=?, telefono=?, rol_id=? WHERE id=?;"
        

        conection.query(consulta,[nombre, email, password,direccion,telefono, rol_id, id],(err)=>{
            if (err) return res.status(500).json({ error: err.message });
            res.json({ mensaje: 'Usuario actualizado' });
        })
    }


// Eliminar usuario
const deleteUsuario = (req,res)=>{
    const { id } = req.params;
    const consulta = "DELETE FROM usuarios WHERE id=?;"

    conection.query(consulta,[id],(err)=>{
         if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: 'Usuario eliminado' });
    })
}
module.exports = {getAllUsuarios,createUsuario, getEspecifiedUsuarioId,updateUsuario ,deleteUsuario}