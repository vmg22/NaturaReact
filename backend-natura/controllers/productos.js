const {conection} = require ("../config/db")


//Obtener todos los productos
const getAllProductos = (req,res) =>{
    // Primero obtenemos las columnas con SHOW COLUMNS
  const columnasQuery = "SHOW COLUMNS FROM productos;";
  const consulta = "SELECT p.* FROM productos p join categorias c on p.categoria_id =  c.id where p.estado =1 and c.estado !=0 ;";
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
          where p.estado=1
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

// Obtener producto por nombre
const getEspecifiedProductoNombre = (req, res) => {
  const { busqueda } = req.params;

  if (!busqueda) {
    return res.status(400).json({ mensaje: "Término de búsqueda no proporcionado" });
  }

  const consulta = `SELECT
          p.*,
          ANY_VALUE(i.url_imagen) AS url_imagen
      FROM
          productos p
      LEFT JOIN
          imagenes_productos i ON p.id = i.producto_id
      WHERE
          p.titulo LIKE ? and p.estado=1
      GROUP BY
          p.id;`;
  const terminoDeBusqueda = `%${busqueda}%`;

  conection.query(consulta, [terminoDeBusqueda], (err, results) => {
    if (err) {
      console.error("Error en la consulta de búsqueda:", err);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
    
    // ¡IMPORTANTE! Devuelve directamente el array de resultados.
    // Si no encuentra nada, será un array vacío [], lo cual está bien.
    res.json(results);
  });
};

//--LEER producto específico (GET por ID)--//
const getEspecifiedProduct = (req,res)=>{
    const consulta = "SELECT * FROM productos WHERE id = ?;"
    const { id } = req.params;
    
    conection.query(consulta,[id],(err,results)=>{
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
    })
}

//obtener categoria por nombre 
const getProductoCategoriaNombre = (req,res) =>{
  // 1. Obtenemos el nombre de la categoría desde el parámetro de la URL
  const { nombre } = req.params;

  // 2. Validamos que el nombre no venga vacío
  if (!nombre) {
    return res.status(400).json({ mensaje: "El nombre de la categoría es requerido." });
  }

  // 3. Creamos la consulta SQL que une las tres tablas
  const consulta = `
    SELECT
        p.*,
        ANY_VALUE(i.url_imagen) AS url_imagen,
        c.nombre AS nombre_categoria 
    FROM
        productos p
    JOIN 
        categorias c ON p.categoria_id = c.id
    LEFT JOIN
        imagenes_productos i ON p.id = i.producto_id
    WHERE
        c.nombre = ? AND p.estado=1
    GROUP BY
        p.id;
  `;

  // 4. Ejecutamos la consulta pasando el nombre de la categoría como parámetro
  conection.query(consulta, [nombre], (err, results) => {
    // Manejo de errores de la base de datos
    if (err) {
      console.error("Error al obtener productos por categoría:", err);
      return res.status(500).json({ error: "Error interno del servidor." });
    }

    // Si todo va bien, devolvemos los resultados en formato JSON
    // Si no se encuentra nada, 'results' será un array vacío [], lo cual es correcto.
    res.json(results);
  });
}



//CREAR producto (POST)//
const createProduct = (req,res)=>{
    const consulta = "INSERT INTO productos (titulo, marca_id, categoria_id, precio_original, precio_descuento, precio_sin_iva, descuento, stock, descripcion, estado) VALUES (?, ?, ?, ?, ?,?,?,?,?,?);"
    const { titulo, marca_id, categoria_id, precio_original, precio_descuento, precio_sin_iva, descuento, stock, descripcion  } = req.body;
    const estado = 1; // Estado activo por defecto

    conection.query(consulta,[titulo, marca_id, categoria_id, precio_original, precio_descuento, precio_sin_iva, descuento, stock, descripcion ,estado],(err,results)=>{
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ mensaje: 'Producto creado correctamente', id: results.insertId })
    })
}

//-ACTUALIZAR producto (PUT)//
    const updateProduct = (req,res) =>{
        const {id} = req.params;
        const { titulo, marca_id, categoria_id, precio_original, precio_descuento, precio_sin_iva, descuento, stock, descripcion , estado} = req.body;

        const consulta = "UPDATE productos SET titulo = ?, marca_id = ?, categoria_id = ?, precio_original = ?, precio_descuento = ?, precio_sin_iva = ?, descuento = ?, stock = ?, descripcion = ?  ,estado=? WHERE id = ?;"
        

        conection.query(consulta,[titulo, marca_id, categoria_id, precio_original, precio_descuento, precio_sin_iva, descuento, stock, descripcion, estado, id],(err)=>{
            if (err) return res.status(500).json({ error: err.message });
            res.json({ mensaje: 'Producto actualizado correctamente' });
        })
    }

//-ELIMINAR producto (DELETE)//

const deleteProduct = (req,res)=>{
    const { id } = req.params;
    const estado = 0; // Desactivamos el producto en lugar de eliminarlo
    const consulta = "UPDATE productos SET estado = ? WHERE id = ?;"

    conection.query(consulta,[estado,id],(err)=>{
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: 'Producto eliminado correctamente' });
    })
}


module.exports = {getAllProductos,getAllProductos2,getEspecifiedProduct,getProductoCategoriaNombre,createProduct, updateProduct, deleteProduct,getEspecifiedProductoNombre}