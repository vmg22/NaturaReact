const {conection} = require ("../config/db")

//Obtener todos los productos
const getAllProductos = (req,res) =>{
    // Primero obtenemos las columnas con SHOW COLUMNS
  const columnasQuery = "SHOW COLUMNS FROM productos;";
  const consulta = "SELECT * FROM productos;";
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

}


//Obtener todos los productos junto con las imagenes 
const getAllProductos2 = (req, res) => {
   
    const consulta = `
      SELECT
          p.*,
          ANY_VALUE(i.url_imagen) AS url_imagen 
      FROM
          productos p
      LEFT JOIN
          imagenes_productos i ON p.id = i.producto_id
      GROUP BY
          p.id;
    `;

    conection.query(consulta, (err, datosResultado) => {
        if (err) {
           
            console.error("Error en la consulta SQL:", err); 
            return res.status(500).json({ error: err.message });
        }
        res.json({
            datos: datosResultado,
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


module.exports = {getAllProductos,getAllProductos2, getEspecifiedProduct,createProduct, updateProduct, deleteProduct}