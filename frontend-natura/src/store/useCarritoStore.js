// store/useCarritoStore.js
import { create } from 'zustand';

const useCarritoStore = create((set, get) => ({
  carrito: [],
  
  agregarAlCarrito: (producto) => {
    const carrito = get().carrito;
    const existe = carrito.find((item) => item.id === producto.id);

    if (existe) {
      set({
        carrito: carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        ),
      });
    } else {
      set({ carrito: [...carrito, { ...producto, cantidad: 1 }] });
    }
  },

  quitarDelCarrito: (id) => {
    const carrito = get().carrito;
    set({ carrito: carrito.filter((item) => item.id !== id) });
  },
}));
export default useCarritoStore;
