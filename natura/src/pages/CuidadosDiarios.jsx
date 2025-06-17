import Header from '../components/Header'
import Footer from "../components/Footer"
import CategoriaGeneral from '../components/CategoriaGeneral'

const CuidadosDiarios = () => {
  let categoria = "cuidados diarios"
  return (
    <div>
      <Header/>
      <CategoriaGeneral categoria={categoria} />
      <Footer/>
    </div>
  )
}

export default CuidadosDiarios
