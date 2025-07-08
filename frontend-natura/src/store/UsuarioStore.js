import { create } from 'zustand';

const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioLogueado"));

const UsuarioStore = create((set) => ({
  usuario: usuarioGuardado || null, // cargado desde localStorage al iniciar

  iniciarSesion: (usuario) => {
    set({ usuario });
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
  },

  cerrarSesion: () => {
    set({ usuario: null });
    localStorage.removeItem("usuarioLogueado");
  },
}));

export default UsuarioStore;
