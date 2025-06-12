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

function App() {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/carrito' element={<Carrito/>}></Route>
        <Route path='/categoria' element={<Categoria/>}></Route>
        <Route path='/categoria-hombre' element={<CategoriaHombre/>}></Route>
        <Route path='/categoria-mujer' element={<CategoriaMujer/>}></Route>
        <Route path='/categoria-infantil' element={<Infantil/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/pago' element={<Pago/>}></Route>
        <Route path='*' element={<Error404/>}></Route>
      </Routes>
    </BrowserRouter>
    
      
 
  )
}

export default App
