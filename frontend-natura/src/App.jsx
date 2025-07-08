import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Carrito from "./pages/Carrito";
import CategoriaHombre from "./pages/CategoriaHombre";
import Categoria from "./pages/Categoria";
import Infantil from "./pages/Infantil";
import Admin from "./pages/Admin";
import Pago from "./pages/Pago";
import Error404 from "./pages/Error404";
import Ayuda from "./pages/Ayuda";
import Blog from "./pages/Blog";
import Maquillaje from "./pages/Maquillaje";
import Rostro from "./pages/Rostro";
import Perfumeria from "./pages/perfumeria";
import CuidadosDiarios from "./pages/CuidadosDiarios";
import Cabello from "./pages/Cabello";
import Promociones from "./pages/Promociones";
import VerTabla from "./pages/VerTabla";
import AgregarTabla from "./pages/AgregarTabla";
import PrivateRoute from "./components/PrivateRoute";
import NoAutorizado from "./pages/NoAutorizado";
import PaginaBusqueda from "./pages/PaginaBusqueda";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/categoria" element={<Categoria />} />
        <Route path="/categorias/:nombre" element={<Categoria />} />
        <Route path="/categoria-hombre" element={<CategoriaHombre />} />
        <Route path="/categoria-infantil" element={<Infantil />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/maquillaje" element={<Maquillaje />} />
        <Route path="/rostro" element={<Rostro />} />
        <Route path="/perfumeria" element={<Perfumeria />} />
        <Route path="/cuidados-diarios" element={<CuidadosDiarios />} />
        <Route path="/cabello" element={<Cabello />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/productos/buscar/:termino" element={<PaginaBusqueda />} />
        <Route path="/ayuda" element={<Ayuda />} />

        {/* Rutas protegidas solo para rol 1 (administrador) */}
        <Route
          path="/verTabla/:tabla" 
          element={
            <PrivateRoute rolPermitido={1}>
              <VerTabla />
            </PrivateRoute>
          }
        />
        <Route
          path="/agregarTabla/:tabla"
          element={
            <PrivateRoute rolPermitido={1}>
              <AgregarTabla />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute rolPermitido={1}>
              <Admin />
            </PrivateRoute>
          }
        />

        {/* Ruta protegida para cualquier usuario logueado */}
        <Route
          path="/perfil"
          element={
            <PrivateRoute>
              <h2>Perfil del usuario</h2>
            </PrivateRoute>
          }
        />

        {/* Página de no autorizado y error 404 */}
        <Route path="/no-autorizado" element={<NoAutorizado />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
