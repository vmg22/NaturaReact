
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoriaGeneral = (props) => {
  const catGeneral = props.categoria;
  const [cat, setCat] = useState(null);

  useEffect(() => {
    // Si no hay una categoría para buscar, no hacemos la llamada.
    if (!catGeneral) return; 

    const getCategorias = async () => {
      try {
        const respuesta = await axios.get(`http://localhost:3001/api/categorias/${catGeneral}`);
        const responseData = respuesta.data[0]; 
        setCat(responseData);
      } catch (error) {
        console.error("Error al obtener las categorías:", error);
      }
    };

    getCategorias();
  }, [catGeneral]);

  // Si `cat` todavía es null (porque los datos aún no han llegado),
  // devolvemos un mensaje de carga y detenemos la ejecución aquí.
  if (!cat) {
    return <div>Cargando categoría...</div>;
  }

  // Si el código llega hasta aquí, es porque `cat` ya NO es null
  // y tiene los datos de la API. Ahora es seguro renderizar.
  return (
    <div>
    
      <div className='d-flex align-items-center justify-content-start justify-content-md-center'>
        <main className='text-start mx-5 mb-4'>
          <h1 className=" text-dark fw-semibold lh-normal mt-md-4 text-center" >
            {cat.nombre}
          </h1>
          <div className="text-dark mt-2" >
            {cat.descripcion}
          </div>
        </main>
      </div>
      
    </div>
  );
};

export default CategoriaGeneral;