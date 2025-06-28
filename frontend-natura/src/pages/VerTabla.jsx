import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button , Modal, Form} from "react-bootstrap";

const VerTabla = () => {
  const { tabla } = useParams();
  const navigate = useNavigate();
  const [filas, setFilas] = useState([]);
  const [columnas, setColumnas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [idAEditar, setIdAEditar] = useState(null);
  const [datosEditar, setDatosEditar] = useState({});

   const getTabla = async () => {
      if (!tabla) return;

      try {
        const respuesta = await axios.get(`http://localhost:3001/${tabla}`);

        // La API debe devolver { columnas: [], datos: [] }
        setColumnas(respuesta.data.columnas);
        setFilas(respuesta.data.datos);
      } catch (error) {
        console.error("Error al obtener la tabla:", error);
      } finally {
        setCargando(false);
      }
    };

      useEffect(() => {
        getTabla();
      }, [tabla]);

  if (!tabla) return <div>⚠️ No se especificó la tabla.</div>;
  if (cargando) return <div>🔄 Cargando datos...</div>;

const handleAgregar = () =>{
    navigate(`/agregarTabla/${tabla}`);
  }

  const handleEliminar = async (id)=>{
    try {
    let respuestaAlert = confirm("¿Estas seguro que quieres eliminar el producto?")
    // console.log(respuestaAlert)
    // console.log(id)
    if(respuestaAlert ){
      await axios.delete(`http://localhost:3001/${tabla}/${id}`)
      alert("Eliminado correctamente")
      getTabla()
    }else{
      alert("No se elimino el producto")
    }
    } catch (error) {
      console.error(error)
    }
  }

  const handleEditar = async (id) =>{
    const filaSeleccionada = filas.find((fila) => fila.id === id); // busca la fila que coincida con el id que recibe por parametr

  if (filaSeleccionada) {
    setDatosEditar(filaSeleccionada); //pone en el modal los datos precargados
    setMostrarModal(true); //pone el modal en true para que se muestre seria como el show
    setIdAEditar(id); //guarda en el estado el id que seleccionamos
  } else {
    console.warn("No se encontró la fila con ese ID");
  }

  }

  const handleGuardarCambios = () => {
    // guardar los cambios del boton en el modal
    console.log("Guardando cambios para el ID:", idAEditar);
    setMostrarModal(false);
  };

  const handleCerrar = () => {
    setMostrarModal(false);
  };

  return (
    <div>
      <div className="d-flex justify-content-around align-items-center mt-2">
        <div>
        <Link to={"/admin"}><p className=""><i className="fa-solid fa-arrow-left"></i>  Volver a Admin</p></Link>
      </div>
        <h2>Tabla: {tabla}</h2>
        <div className="d-flex justify-content-end">
        <Button
          variant="success"
          style={{ marginRight: "10px" }}
          onClick={handleAgregar}
        >
          Agregar
        </Button>

        
        </div>
        
      </div>

      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", margin: "1rem auto", border:"1px solid black" }}
        className="table-bordered"
      >
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            {columnas.map((col, i) => (
              <th key={i} className="text-center">{col.nombre}</th>
            ))}
            <th className="text-center">accion</th>
          </tr>
        </thead>
        <tbody>
          {filas.map((fila, i) => (
            <tr key={i}>
              {columnas.map((col, j) => (
                <td key={j}>{fila[col.nombre]}</td>
              ))}
              <div className="d-flex justify-content-center m-2">
              <Button variant="warning" style={{ marginRight: "10px" }} onClick={()=>{handleEditar(fila.id)}}>
                Editar
              </Button>
              <Button variant="danger" onClick={()=> handleEliminar(fila.id)}> 
                Eliminar
              </Button>
              </div>
              
            </tr>
            
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <Modal show={mostrarModal} onHide={handleCerrar}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form > 
          {columnas
            .filter((col) => col.extra !== "auto_increment") // Primero filtra q no sea id autoincrement para no mostrarlo
            .map(
              (
                col // si no e s autoincrement empieza el mapeo de las columnas
              ) => (
                <Form.Group
                  className="mb-3"
                  controlId={`form-${col.nombre}`}
                  key={col.nombre}
                >
                  <Form.Label>{col.nombre}</Form.Label>
                  <Form.Control
                  name={col.nombre}
                  value={datosEditar[col.nombre] || ""} //le pone a los input el valor cargado de la fila seleccionada
                  onChange={(e)=>{setDatosEditar({
                  ...datosEditar,
                  [col.nombre]: e.target.value,
                })}}
                  />
                </Form.Group>
              )
            )}
          <div className="d-flex justify-content-center">
          <Button variant="warning" onClick={handleGuardarCambios} >
            Actualizar
          </Button>
          </div>

        </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default VerTabla;
