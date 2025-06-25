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
        setTables(respuesta.data);
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
    <div>
      <div className="d-flex justify-content-center">
        <table className="mi-tabla">
          <thead className="table-light text-center">
            <tr>
              <th>Tablas</th>
              <th>Acciones</th>
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
              <Button variant="warning" style={{ marginRight: "10px" }}>
                Editar
              </Button>
              <Button variant="danger">
                Eliminar
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
