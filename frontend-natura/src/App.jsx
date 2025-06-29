import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Carrito from "./pages/Carrito"
import CategoriaHombre from "./pages/CategoriaHombre"
import CategoriaMujer from "./pages/CategoriaMujer"
import Categoria from "./pages/Categoria"
import Infantil from "./pages/Infantil"
import Admin from "./pages/Admin"
import Pago from "./pages/Pago"
import Error404 from "./pages/Error404"
import RevistaNatura from './pages/RevistaNatura'
import SobreNatura from "./pages/SobreNatura"
import Sustentabilidad from "./pages/Sustentabilidad"
import QuieroSerConsultor from "./pages/QuieroSerConsultor"
import SoyConsultor from "./pages/SoyConsultor"
import PorInternet from "./pages/PorInternet"
import PorRevista from "./pages/PorRevista"
import Ayuda from "./pages/Ayuda"
import InfoProductos from "./pages/InfoProductos"
import Blog from "./pages/Blog"
import Maquillaje from './pages/Maquillaje'
import Rostro from './pages/Rostro'
import Perfumeria from './pages/perfumeria'
import CuidadosDiarios from './pages/CuidadosDiarios'
import Cabello from './pages/Cabello'
import Promociones from './pages/Promociones'
import PerfumeriaMasculina from './pages/PerfumeriaMasculina'
import PerfumeriaFemenina from './pages/PerfumeriaFemenina'
import PerfumeriaUnisex from './pages/PerfumeriaUnisex'
import PerfumeriaInfantil from './pages/PerfumeriaInfantil'
import ProDescuentos from './pages/ProDescuentos'
import ProKitsNatura from './pages/ProKitsNatura'
import ProPrimeraCompra from './pages/ProPrimeraCompra'
import ProLanzamientos from './pages/ProLanzamientos'
import RPielOleosa from './pages/RPielOleosa'
import RPielSeca from './pages/RPielSeca'
import RPielMixta from './pages/RPielMixta'
import RTodoTipoPiel from './pages/RTodoTipoPiel'
import VerTabla from "./pages/VerTabla"
import AgregarTabla from './pages/AgregarTabla'
import PrivateRoute from "./components/PrivateRoute";
import NoAutorizado from "./pages/NoAutorizado";
import PaginaBusqueda from './pages/PaginaBusqueda'


function App() {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/404' element={<Error404/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/categoria' element={<Categoria/>}></Route>
        <Route path='/categoria-hombre' element={<CategoriaHombre/>}></Route>
        <Route path="/carrito" element={<Carrito />} />
        <Route path='/categoria-mujer' element={<CategoriaMujer/>}></Route>
        <Route path='/categoria-infantil' element={<Infantil/>}></Route>
        <Route path='/pago' element={<Pago/>}></Route>
        <Route path='/revista-natura' element={<RevistaNatura/>}></Route>
        <Route path='/sobre-natura' element={<SobreNatura/>}></Route>
        <Route path='/sustentabilidad' element={<Sustentabilidad/>}></Route>
        <Route path='/quiero-ser-consultor' element={<QuieroSerConsultor/>}></Route>
        <Route path='/soy-consultor' element={<SoyConsultor/>}></Route>
        <Route path='/por-revista' element={<PorRevista/>}></Route>
        <Route path='/por-internet' element={<PorInternet/>}></Route>
        <Route path='/info-productos' element={<InfoProductos/>}></Route>
        <Route path='/ayuda' element={<Ayuda/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/maquillaje' element={<Maquillaje/>}></Route>
        <Route path='/rostro' element={<Rostro/>}></Route>
        <Route path='/perfumeria' element={<Perfumeria/>}></Route>
        <Route path='/cuidados-diarios' element={<CuidadosDiarios/>}></Route>
        <Route path='/cabello' element={<Cabello/>}></Route>
        <Route path='/promociones' element={<Promociones/>}></Route>
        <Route path='/p-hombre' element={<PerfumeriaMasculina/>}></Route>
        <Route path='/p-fem' element={<PerfumeriaFemenina/>}></Route>
        <Route path='/p-unisex' element={<PerfumeriaUnisex/>}></Route>
        <Route path='/p-infantil' element={<PerfumeriaInfantil/>}></Route>
        <Route path='/pro-descuentos' element={<ProDescuentos/>}></Route>
        <Route path='/pro-kits-natura' element={<ProKitsNatura/>}></Route>
        <Route path='/pro-primera-compra' element={<ProPrimeraCompra/>}></Route>
        <Route path='/pro-lanzamientos' element={<ProLanzamientos/>}></Route>
        <Route path='/r-piel-oleosa' element={<RPielOleosa/>}></Route>
        <Route path='/r-piel-seca' element={<RPielSeca/>}></Route>
        <Route path='/r-piel-mixta' element={<RPielMixta/>}></Route>
        <Route path='/r-todo-tipo-piel' element={<RTodoTipoPiel/>}></Route>
        <Route path='/productos/buscar/:termino' element={<PaginaBusqueda/>}></Route>


        {/* estas deberian ser privadas */}
        {/* <Route path='/verTabla/:tabla' element={<VerTabla/>}></Route> */}
        <Route path='/verTabla/:tabla'  element={<PrivateRoute rolPermitido={1}><VerTabla /></PrivateRoute>} />
        <Route path='/agregarTabla/:tabla'  element={<PrivateRoute rolPermitido={1}><AgregarTabla /></PrivateRoute>} />
    
      
    
        <Route path="/admin" element={<PrivateRoute rolPermitido={1}><Admin /></PrivateRoute>}/>
        
        <Route path="/perfil" element={<PrivateRoute ><h2>Perfil del usuario</h2></PrivateRoute>}/>
        <Route path="/no-autorizado" element={<NoAutorizado />} />
        
        <Route path='*' element={<Error404/>}></Route>
        
      </Routes>
    </BrowserRouter>
    
      
 
  )
}

export default App
