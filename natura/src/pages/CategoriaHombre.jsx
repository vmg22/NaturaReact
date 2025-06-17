import Header from '../components/Header'
import Footer from "../components/Footer"
import CategoriaGeneral from '../components/CategoriaGeneral'
import { Link } from 'react-router-dom'

const CategoriaHombre = () => {
  let categoria = "hombres"
  return (
    <div>
      <Header/>
      <CategoriaGeneral categoria={categoria} />
      
      <Footer/>
    </div>
  )
}

export default CategoriaHombre
