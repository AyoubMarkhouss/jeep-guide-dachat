import { create } from "zustand";

export const useCarStore = create((set) => ({
  car: "",
  updateCar: (car) => set(() => ({ car: car })),
}));
