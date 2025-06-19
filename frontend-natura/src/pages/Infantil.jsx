import Header from '../components/Header'
import Footer from "../components/Footer"
import CategoriaGeneral from '../components/CategoriaGeneral'
import CarrouselInfantil from '../components/carrousel/CarrouselInfantil'

const Infantil = () => {
  let categoria = "infantil"
  return (
    <div>
      <Header/>
      <CarrouselInfantil/>
      <CategoriaGeneral categoria={categoria} />
      <Footer/>
    </div>
  )
}

export default Infantil
