import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const VerTabla = () => {

  const { tabla } = useParams();

  const [filas, setFilas] = useState([]);
  const [columnas, setColumnas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
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

    getTabla();
  }, [tabla]);

  if (!tabla) return <div>⚠️ No se especificó la tabla.</div>;
  if (cargando) return <div>🔄 Cargando datos...</div>;

  return (
    <div>
      <h2>Tabla: {tabla}</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", margin: "1rem auto" }}>
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            {columnas.map((col, i) => (
              <th key={i}>{col.nombre}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.map((fila, i) => (
            <tr key={i}>
              {columnas.map((col, j) => (
                <td key={j}>{fila[col.nombre]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerTabla;