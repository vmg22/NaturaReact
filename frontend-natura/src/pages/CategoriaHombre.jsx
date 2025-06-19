import Header from '../components/Header'
import Footer from "../components/Footer"
import CategoriaGeneral from '../components/CategoriaGeneral'
import { Link } from 'react-router-dom'
import CarrouselHombres from '../components/carrousel/CarrouselHombres'

const CategoriaHombre = () => {
  let categoria = "hombres"
  return (
    <div>
      <Header/>
      <CarrouselHombres/>
      <CategoriaGeneral categoria={categoria} />
      <Footer/>
    </div>
  )
}

export default CategoriaHombre
