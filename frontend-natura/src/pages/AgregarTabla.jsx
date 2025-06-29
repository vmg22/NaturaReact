import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {Form,Toast, ToastContainer} from "react-bootstrap";
import ToastExito from "../components/toast/ToastExito";
import ToastError from "../components/toast/ToastError";

const AgregarTabla = () => {

  const navigate = useNavigate();
  const { tabla } = useParams();

  const [columnas, setColumnas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [formData, setFormData] = useState({});
  const [toastVisible, setToastVisible] = useState(false);
  const [toastError, setToastError] = useState(false);

  console.log(tabla);

  useEffect(() => {
    const traerTabla = async () => {
      if (!tabla) return;

      try {
        const respuesta = await axios.get(
          `http://localhost:3001/${tabla}`
        );
        setColumnas(respuesta.data.columnas);
      } catch (error) {
        console.error("Error al obtener la tabla:", error);
      } finally {
        setCargando(false);
      }
    };

    traerTabla();
  }, [tabla]);

  if (!tabla) return <div>⚠️ No se especificó la tabla.</div>;
  if (cargando) return <div>🔄 Cargando datos...</div>;


  const MAPEO_MYSQL_HTML = {
    // Clave: tipo de input HTML
    // Valor: array de prefijos de MySQL que corresponden a esa clave
    number: [
      "int",
      "decimal",
      "float",
      "double"
    ],
    date: ["date"],
    time: ["time"],
    "datetime-local": ["datetime", "timestamp"],
    text: ["varchar", "text"],
  };

  const mapTipoMySQLaHTML_alternativa = (tipo) => {
    //si es null o undefiend lo pone como tipo texto
    if (!tipo) return "text";
    //pone todo en minusculo
    const tipoLower = tipo.toLowerCase();

    // Iteramos sobre nuestro mapa de configuración
    // Object.entries(MAPEO_MYSQL_HTML) -> [ ['number', ['int', 'decimal', ...]], ['date', ['date']], ... ]
    for (const [tipoHTML, prefijosMySQL] of Object.entries(MAPEO_MYSQL_HTML)) {
      // some() devuelve true si al menos un prefijo cumple la condición
      if (prefijosMySQL.some((prefijo) => tipoLower.startsWith(prefijo))) {
        return tipoHTML;
      }
    }

    // Si no se encuentra ninguna coincidencia, devolvemos el valor por defecto.
    return "text";
  };

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
        let response = await axios.post(`http://localhost:3001/${tabla}`, formData);
        setToastVisible(true)
    // console.log("El valor de tabla es:", tabla);
        setTimeout(() => {
        navigate(`/verTabla/${tabla}`);
      }, 1500); // espera 2 segundos antes de navegar
    } catch (error) {
        console.error(error)
    }

  }
  const handleChange = (e) =>{
    //destructuro lo que me da target
    const { name, value, type, checked } = e.target;
    //si es un checkbox le pongo lo q marque checked sino lo que trae value
    const valorInput = type === 'checkbox' ? checked : value;

    //aqui guardo en el estado de dataform lo que ya tenia con el spreadoperator y le agrego [name] que es el
    //nombre de la variable y le coloco el valor del input 
    setFormData(prevData => ({
      ...prevData,
      [name]: valorInput
    }));
  }

  return (
    <div>
        <div className="divTituloTabla d-flex align-items-center justify-content-around ">
        <Link to={"/admin"} className="volver"><p ><i className="fa-solid fa-arrow-left"></i>  Volver a Admin</p></Link>
        <h2 className="text-center tituloMainAdmin">AGREGAR A LA TABLA: {tabla}</h2>
        <div></div>
        </div>


      <div className="d-flex justify-content-center bodyAgregar">
        <Form onSubmit={handleSubmit} className="text-center formAgregar">
          {columnas
            .filter((col) => col.extra !== "auto_increment") // Primero filtra q no sea id autoincrement
            .map(
              (
                col // si noe s autoincrement empieza el mapeo de las columnas
              ) => (
                <Form.Group
                  className="mb-3"
                  controlId={`form-${col.nombre}`}
                  key={col.nombre}
                >
                  <Form.Label>{col.nombre}</Form.Label>
                  <Form.Control
                    type={mapTipoMySQLaHTML_alternativa(col.tipo)} 
                    placeholder={`Ingrese ${col.nombre}`}
                    name={col.nombre}
                    value={formData[col.nombre] || ""}
                    onChange={handleChange}
                    className="rounded-input"
                    required
                  />
                </Form.Group>
              )
            )}
          <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit" className="botonAcciones">
            Agregar a {tabla}
          </Button>
          </div>
          
        </Form>
      </div>




       <ToastExito
      visible={toastVisible}
      onClose={() => setToastVisible(false)}
      tipo="success"
      titulo="Éxito"
      mensaje={`¡Agregado con éxito!`}
    />

    <ToastError
      visible={toastError}
      onClose={() => setToastError(false)}
      tipo="danger"
      titulo="Error"
      mensaje="No se pudieron guardar los cambios"
    />
    </div>
  );
};

export default AgregarTabla;
