import Header from '../components/Header'
import Footer from "../components/Footer"
import CarrouselCard1 from '../components/carrousel/CarrouselCard1'
import Novedades from '../components/Novedades'



const Home = () => {
return (
    <div>
      
      <Header/>
      <CarrouselCard1/>
      
      <Novedades />
      <Footer/>

    </div>
  )
}

export default Home
