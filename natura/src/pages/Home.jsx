import Header from '../components/Header'
import Footer from "../components/Footer"
import CarrouselCard1 from '../components/carrousel/CarrouselCard1'
import Novedades from '../components/Novedades'
import Perfumeria from './perfumeria'



const Home = () => {
return (
    <div>
      
      <Header/>
      <CarrouselCard1/>
      <Perfumeria/> 
      <Novedades />
      <Footer/>

    </div>
  )
}

export default Home
