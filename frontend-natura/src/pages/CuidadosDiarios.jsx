import Header from '../components/Header'
import Footer from "../components/Footer"
import CategoriaGeneral from '../components/CategoriaGeneral'
import CarrouselCuidadosDiarios from '../components/carrousel/CarrouselCuidadosDiarios'

const CuidadosDiarios = () => {
  let categoria = "cuidados diarios"
  return (
    <div>
      <Header/>
      <CarrouselCuidadosDiarios/>
      <CategoriaGeneral categoria={categoria} />
      <Footer/>
    </div>
  )
}

export default CuidadosDiarios
