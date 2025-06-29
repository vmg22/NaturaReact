import Header from '../components/Header'
import Footer from "../components/Footer"
import CarrouselCard1 from '../components/carrousel/CarrouselCard1'
import CarrouselCard2 from '../components/carrousel/CarrouselCard2'
import Novedades from '../components/Novedades'
import ListaProductos from '../components/ListaProductos'



const Home = () => { 
return (
    <div>
      
      <Header/>
      <CarrouselCard1/>
      <CarrouselCard2/>
      <ListaProductos />
      <Novedades/>
      <Footer/>

    </div>
  )
}

export default Home
