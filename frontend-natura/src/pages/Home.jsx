import Header from '../components/Header'
import Footer from "../components/Footer"
import CarrouselCard1 from '../components/carrousel/CarrouselCard1'
import CarrouselCard2 from '../components/carrousel/CarrouselCard2'
import Novedades from '../components/Novedades'
import Carrito from "../pages/Carrito"


const Home = () => { 
return (
    <div>
      
      <Header/>
      <Carrito/>  
      <CarrouselCard1/>
      <CarrouselCard2 />
      
      <Novedades />
      <Footer/>

    </div>
  )
}

export default Home
