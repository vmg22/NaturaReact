const {conection} = require ("../config/db")

const getAllProductos = (req,res) =>{
    const consulta = "select * from productos;"

    conection.query(consulta, (err, results) => {
    if (err) throw err
    res.json(results)
    })

}


module.exports = {getAllProductos}