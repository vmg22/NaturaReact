import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AgregarTabla = () => {

  const navigate = useNavigate();
  const { tabla } = useParams();

  const [columnas, setColumnas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [formData, setFormData] = useState({});

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

  // 1. Definimos el mapa de tipos fuera de la función.
  // Es más fácil de leer y modificar.
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
    checkbox: ["tinyint(1)"], // Mantenemos este caso específico
    time: ["time"],
    "datetime-local": ["datetime", "timestamp"],
    // 'text' es nuestro comodín, pero podemos ser explícitos también
    text: ["varchar", "text", "char", "mediumtext", "longtext", "enum", "set"],
  };

  const mapTipoMySQLaHTML_alternativa = (tipo) => {
    // Misma guarda para nulos/undefined
    if (!tipo) return "text";

    const tipoLower = tipo.toLowerCase();

    // Caso especial para tinyint(1) porque startsWith no funcionaría igual
    if (tipoLower === "tinyint(1)") {
      return "checkbox";
    }

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
        alert(`¡${tabla} agregado exitosamente!`)
         console.log("Navegando a:", `/verTabla/${tabla}`); 
    // console.log("El valor de tabla es:", tabla);
        navigate(`/verTabla/${tabla}`); // redirigir
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
      <h1>Agregar a la tabla {tabla}</h1>
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleSubmit}>
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
                  />
                </Form.Group>
              )
            )}

          <Button variant="primary" type="submit">
            Agregar a {tabla}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AgregarTabla;
