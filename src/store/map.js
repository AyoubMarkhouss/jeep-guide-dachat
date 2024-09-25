import { create } from "zustand";

export const mapStore = create((set) => ({
  mapClicked: null,
  updateMapClicked: (mapClicked) => set(() => ({ mapClicked: mapClicked })),
}));
