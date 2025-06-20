const express = require ("express")
const {conection} = require("../backend-natura/config/db")
const routesProductos = require("./routes/productos")
const routesCategorias = require("./routes/categorias")
// const routesCarrito = require("./routes/carrito")
// const routesDescuentos = require("./routes/descuentos")
// const routesImagenes = require("./routes/imagenes")
// const routesMarcas = require("./routes/marcas")
// const routesOrdenes = require("./routes/ordenes")
// const routesRoles = require("./routes/roles")
// const routesUsuarios = require("./routes/usuarios")


const cors = require("cors")

const app = express()
//instanciar funciones de la biblioteca 
app.use(express.json());
app.use("/" , routesProductos)
app.use("/" , routesCategorias)
app.use(cors());



// app.use("/marcas" , routesMarcas)

// app.use("/usuarios" , routesUsuarios)
// app.use("/roles" , routesRoles)
// app.use("/imagenes" , routesImagenes)
// app.use("/ordenes" , routesOrdenes)
// app.use("/carrito" , routesCarrito)
// app.use("/descuentos" , routesDescuentos)


app.get("/",(req,res)=>{
    res.send("Bienvenido a mi DB")
})

// Verificar conexión
conection.connect((err) => {
if (err) {
console.error('❌ Error al conectar a la base de datos:', err.message);
} else {
console.log('✅ Conexión exitosa a la base de datos natura_react');
}
});




// Iniciar servidor
app.listen(3001, () => {
console.log('🚀 Servidor backend corriendo en puerto 3001');
});