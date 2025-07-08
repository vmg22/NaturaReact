import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import "../../styles/MainAdmin.css"
import { useNavigate } from "react-router-dom";

const MainAdmin = () => {
  const [tables, setTables] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const mostrarTablas = async () => {
      try {
        const respuesta = await axios.get("http://localhost:3001/tablas");
        // Filtra las tablas "roles" y "detalle_ordenes"
        const tablasFiltradas = respuesta.data.filter(
          tabla => tabla !== "roles" && tabla !== "detalle_orden"
        );
        setTables(tablasFiltradas);
      } catch (error) {
        console.error("Error al obtener las tablas:", error);
      }
    };

    mostrarTablas();
  }, []);

  const verTabla = (i) =>{
    console.log("me llega", tables[i] )
    const tabla = tables[i]
    navigate(`/verTabla/${tabla}`);
  }
  
  const agregarTabla = (i) =>{
    console.log("me llega", tables[i])
    const tabla = tables[i]
    navigate(`/agregarTabla/${tabla}`);
  }
  return (
    <div >
      <div className="d-flex justify-content-center mt-2">
        <table className="mi-tabla">
          <thead className="table-light text-center">
            <tr>
              <th className="tituloMainAdmin" style={{backgroundColor:"rgb(32, 32, 32)", color:"white"}}>TABLAS</th>
              <th className="tituloMainAdmin" style={{backgroundColor:"rgb(32, 32, 32)", color:"white"}}>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
        {tables.map((tabla, index) => (
          <tr key={index}>
            <td>{tabla}</td>
            <td>
              <Button variant="primary" style={{ marginRight: "10px" }} onClick={()=> verTabla(index)}>
                Ver tabla
              </Button>
              <Button variant="success" style={{ marginRight: "10px" }} onClick={()=> agregarTabla(index)}>
                Agregar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainAdmin;
