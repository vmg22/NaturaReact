import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button , Modal, Form, Toast, ToastContainer} from "react-bootstrap";
import ToastExito from "../components/toast/ToastExito";
import ToastError from "../components/toast/ToastError";
import Header from "../components/Header";

const VerTabla = () => {
  const { tabla } = useParams();
  const navigate = useNavigate();
  const [filas, setFilas] = useState([]);
  const [columnas, setColumnas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [idAEditar, setIdAEditar] = useState(null);
  const [datosEditar, setDatosEditar] = useState({});
  const [toastVisible, setToastVisible] = useState(false);
  const [toastError, setToastError] = useState(false);

  const MAPEO_MYSQL_HTML = {
  number: ["int", "decimal", "float", "double"],
  date: ["date"],
  time: ["time"],
  "datetime-local": ["datetime", "timestamp"],
  text: ["varchar", "text"],
};

const mapTipoMySQLaHTML_alternativa = (tipo) => {
  if (!tipo) return "text";
  const tipoLower = tipo.toLowerCase();
  for (const [tipoHTML, prefijosMySQL] of Object.entries(MAPEO_MYSQL_HTML)) {
    if (prefijosMySQL.some((prefijo) => tipoLower.startsWith(prefijo))) {
      return tipoHTML;
    }
  }
  return "text";
};

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

  //agregar a la base navega a otra pagina
  const handleAgregar = () =>{
    navigate(`/agregarTabla/${tabla}`);
  }

  //eliminar de la base
  const handleEliminar = async (id)=>{
    try {
    let respuestaAlert = confirm("¿Estas seguro que quieres eliminar?")
    // console.log(respuestaAlert)
    // console.log(id)
    if(respuestaAlert ){
      await axios.delete(`http://localhost:3001/${tabla}/${id}`)
      setToastVisible(true)
      getTabla()
    }else{
      setToastError(true)
    }
    } catch (error) {
      console.error(error)
    }
  }

  //muestra el modal con el boton de editar
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

// actualizar los cambios de la fila con el boton del modal
  const handleGuardarCambios = async () => {  
  //para que se oculte el modal una vez que se presiona el boton
    setMostrarModal(false);
  //destructurando datosEditar para que no pase el id en la consulta
  const { id, ...resto } = datosEditar;

  // aqui recorre los datos que guarde en resto para poder cambiar el tipo de fecha q nos deja el campo de bootstrap y que mysql no permite
  const datosListos = Object.fromEntries(
    Object.entries(resto).map(([clave, valor]) => {
      if (clave.startsWith("fecha") && valor) {
        const fecha = new Date(valor);
        // Validamos que la fecha sea válida antes de formatear
        if (!isNaN(fecha.getTime())) {
          // convertir la fecha a formato MySQL xq bootstrap manda en otro formato
          const valorFormateado = fecha.toISOString().slice(0, 19).replace("T", " ");
          //se devuelve con fecha 
          return [clave, valorFormateado];
        }
      }
      // para todos los demás casos que no tienen fecha en su tabla como atributo
      return [clave, valor];
    })
  );
 
  try {
    await axios.put(`http://localhost:3001/${tabla}/${id}`, datosListos);
    
     //para que se oculte el modal una vez que se presiona el boton y si se haya actualizado
    setMostrarModal(false);
    setToastVisible(true)
  } catch (error) {
    // en caso de error el modal se mantiene abierto
    console.error("Error al actualizar:", error);
    setToastError(true)
  }
    //llamo a gettabla para que llame de nuevo con un get a la base de datos
    getTabla()
  };

  const handleCerrar = () => {
    setMostrarModal(false);
  };

  return (
    <div>
      <div className="d-flex justify-content-around align-items-center mt-2 divTituloTabla">
        <div>
        <Link to={"/admin"} className="volver"><p><i className="fa-solid fa-arrow-left"></i>  Volver a Admin</p></Link>
      </div>
        <h2 className="tituloMainAdmin ">TABLA: {tabla}</h2>
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

    <div className="d-flex justify-content-center mt-2">
    <table 
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", border:"1px solid black" }}
        className="table-bordered mi-tabla "
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
                <td 
                key={j}
                style={
                col.nombre === "url_imagen"
                  ? { maxWidth: "300px", wordWrap: "break-word", whiteSpace: "normal", overflowWrap: "break-word" }
                  : {}
              }
                >{fila[col.nombre]}</td>
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
    </div>
      

      {/* Modal para boton de editar */}
      <Modal show={mostrarModal} onHide={handleCerrar} >
        <Modal.Header closeButton className="modalEditar">
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bodyModal">
         <Form onSubmit={(e) => {
            e.preventDefault();
            handleGuardarCambios(); 
          }}> 
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
                    type={mapTipoMySQLaHTML_alternativa(col.tipo)}
                    name={col.nombre}
                    value={datosEditar[col.nombre] || ""}
                    onChange={(e) => {
                      setDatosEditar({
                        ...datosEditar,
                        [col.nombre]: e.target.value,
                      });
                    }}
                    className="rounded-input2"
                    required
                  />
                </Form.Group>
              )
            )}
          <div className="d-flex justify-content-center">
          <Button type="submit" variant="warning" className="botonAcciones" >
            Actualizar
          </Button>
          </div>

        </Form>
        </Modal.Body>
      </Modal>

{/* llamada al componente toast  */}
      <ToastExito
      visible={toastVisible}
      onClose={() => setToastVisible(false)}
      tipo="success"
      titulo="Éxito"
      mensaje="¡Cambios guardados con éxito!"
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

export default VerTabla;
