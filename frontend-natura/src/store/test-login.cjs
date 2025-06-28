const axios = require("axios");

const testLogin = async () => {
  try {
    const response = await axios.post("http://localhost:3001/login", {
      email: "maria@natura.com", // Reemplazá con un email real de tu BD
      password: "123456"        // Reemplazá con la contraseña correspondiente
    });

    console.log("✅ Login exitoso:");
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.error("❌ Error en respuesta del servidor:");
      console.error("Código:", error.response.status);
      console.error("Mensaje:", error.response.data);
    } else if (error.request) {
      console.error("❌ No se recibió respuesta del servidor (¿servidor apagado?)");
    } else {
      console.error("❌ Error desconocido:", error.message);
    }
  }
};

testLogin();