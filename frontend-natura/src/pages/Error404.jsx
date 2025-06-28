import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/Error404.css"
import { Link } from 'react-router-dom';

const Error404 = () => {


  return (
    <>
    <Header/> 
    <h2 className='h2Error404'>ERROR 404</h2>
    <p style={{textAlign:"center", marginTop:"20px"}}><strong >Ups… No encontramos tu búsqueda.</strong></p>
    <p style={{textAlign:"center" , marginTop:"20px"}}>¡Pero no te desanimes! Tenemos muchos productos y novedades para vos.</p>
    <div className='d-flex align-items-center justify-content-between'>
      <div>
        <Link to={"/"}><p>Ir a home <i className="fa-solid fa-arrow-right"></i></p></Link>
      </div>
      <div>
        <Link to={"/"}><p>Ver lanzamientos <i class="fa-solid fa-arrow-right"></i></p></Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Error404
