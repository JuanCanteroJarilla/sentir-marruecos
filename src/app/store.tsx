import { create } from "zustand";

interface State {
  ruta: string;
}
interface StateActions {
  setRuta: (ruta: string) => void;
}

type Store = StateActions & State;

const useStore = create<Store>((set) => ({
  ruta: "",
  setRuta: (payload) => set((state: State) => ({ ...state, ruta: payload })),
}));

export default useStore;
