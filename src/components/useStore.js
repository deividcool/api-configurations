// useStore.js
import create from 'zustand';

const useStore = create((set) => ({
  selectedCountries: [],
  addCountry: (country) => set((state) => {
    // Verificar si el país ya está en la lista
    if (!state.selectedCountries.find(c => c.cca3 === country.cca3)) {
      return { selectedCountries: [...state.selectedCountries, country] };
    }
    return state;
  }),
  removeCountry: (cca3) => set((state) => ({
    selectedCountries: state.selectedCountries.filter((country) => country.cca3 !== cca3)
  }))
}));

export default useStore;