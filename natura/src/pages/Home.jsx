import Header from '../components/Header'
import Footer from "../components/Footer"
import CarrouselCard1 from '../components/carrousel/CarrouselCard1'
import Novedades from '../components/Novedades'
import CarrouselCard2 from '../components/carrousel/CarrouselCard2'


const Home = () => {
return (
    <div>
      
      <Header/>
      <CarrouselCard1/>
      <CarrouselCard2/> 
      <Novedades />
      <Footer/>

    </div>
  )
}

export default Home
