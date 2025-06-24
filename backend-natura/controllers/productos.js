const {conection} = require ("../config/db")

//Obtener todos los productos
const getAllProductos = (req,res) =>{
    // Primero obtenemos las columnas con SHOW COLUMNS
  const columnasQuery = "SHOW COLUMNS FROM productos;";
  const consulta = "SELECT * FROM productos;";
  conection.query(columnasQuery, (err, columnasResultado) => {
    if (err) return res.status(500).json({ error: err.message });

    // extraemos solo el nombre de las columnas
    const columnas = columnasResultado.map(col => col.Field);

    conection.query(consulta, (err2, datosResultado) => {
      if (err2) return res.status(500).json({ error: err2.message });

      res.json({
        columnas,
        datos: datosResultado,
      });
    });
  });

}

//--LEER producto específico (GET por ID)--//
const getEspecifiedProduct = (req,res)=>{
    const consulta = "SELECT * FROM productos WHERE id = ?;"
    const { id } = req.params;
    
    conection.query(consulta,[id],(err,results)=>{
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
    })
}

//CREAR producto (POST)//
const createProduct = (req,res)=>{
    const consulta = "INSERT INTO productos (titulo, marca_id, categoria_id, precio_original, precio_descuento, precio_sin_iva, descuento, stock, descripcion) VALUES (?, ?, ?, ?, ?,?,?,?,?);"
    const { titulo, marca_id, categoria_id, precio_original, precio_descuento, precio_sin_iva, descuento, stock, descripcion } = req.body;

    conection.query(consulta,[titulo, marca_id, categoria_id, precio_original, precio_descuento, precio_sin_iva, descuento, stock, descripcion],(err,results)=>{
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ mensaje: 'Producto creado correctamente', id: results.insertId })
    })
}

//-ACTUALIZAR producto (PUT)//
    const updateProduct = (req,res) =>{
        const {id} = req.params;
        const { titulo, marca_id, categoria_id, precio_original, precio_descuento, precio_sin_iva, descuento, stock, descripcion } = req.body;

        const consulta = "UPDATE productos SET titulo = ?, marca_id = ?, categoria_id = ?, precio_original = ?, precio_descuento = ?, precio_sin_iva = ?, descuento = ?, stock = ?, descripcion = ? WHERE id = ?;"
        

        conection.query(consulta,[titulo, marca_id, categoria_id, precio_original, precio_descuento, precio_sin_iva, descuento, stock, descripcion,id],(err)=>{
            if (err) return res.status(500).json({ error: err.message });
            res.json({ mensaje: 'Producto actualizado correctamente' });
        })
    }

//-ELIMINAR producto (DELETE)//

const deleteProduct = (req,res)=>{
    const { id } = req.params;
    const consulta = "DELETE FROM productos WHERE id = ?;"

    conection.query(consulta,[id],(err)=>{
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: 'Producto eliminado correctamente' });
    })
}


module.exports = {getAllProductos, getEspecifiedProduct,createProduct, updateProduct, deleteProduct}