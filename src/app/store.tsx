import { create } from "zustand";

interface State {
  ruta: string;
  ruteLocation: string;
}
interface StateActions {
  setRuta: (ruta: string) => void;
  setRuteLocation: (ruteLocation: string) => void;
}

type Store = StateActions & State;

const useStore = create<Store>((set) => ({
  ruta: "",
  ruteLocation: "",
  // Actions
  setRuta: (payload) => set((state: State) => ({ ...state, ruta: payload })),
  setRuteLocation: (payload) =>
    set((state: State) => ({ ...state, ruteLocation: payload })),
}));

export default useStore;
