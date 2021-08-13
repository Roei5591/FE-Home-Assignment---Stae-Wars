import { createContext, useState } from 'react';
import Film from '../interfaces/film';

interface FilmState {
  selectedFilm: Film | null;
  setSelectedFilm: React.Dispatch<React.SetStateAction<Film | null>> | null;
}

export const StoreContext = createContext<FilmState>({ selectedFilm: null, setSelectedFilm: null });

export default function SelectedFilmStore({ children }: { children: any }) {

  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  return <StoreContext.Provider value={{ selectedFilm, setSelectedFilm }}> {children} </StoreContext.Provider>
}
