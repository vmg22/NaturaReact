import Header from '../components/Header'
import Footer from "../components/Footer"
import CategoriaGeneral from '../components/CategoriaGeneral'

const Infantil = () => {
  let categoria = "infantil"
  return (
    <div>
      <Header/>
      <CategoriaGeneral categoria={categoria} />
      <Footer/>
    </div>
  )
}

export default Infantil
