import { create } from 'zustand';

const UsuarioStore = create((set) => ({
  usuario: null, // Aquí guardamos el usuario logueado

  iniciarSesion: (usuario) => set({ usuario }), // Guarda el usuario
  cerrarSesion: () => {
    set({ usuario: null });   // Limpia el usuario
    localStorage.removeItem("usuarioLogueado");
  },
}));

export default UsuarioStore;

