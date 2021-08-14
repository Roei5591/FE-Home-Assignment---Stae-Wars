import { createContext, useState } from 'react';
import Film from '../interfaces/film';

interface FilmState {
  selectedFilm: Film | null;
  setSelectedFilm: React.Dispatch<React.SetStateAction<Film | null>> | null;
  selectedFilmId: number | null;
}

export const StoreContext = createContext<FilmState>({selectedFilmId:null, selectedFilm: null, setSelectedFilm: null });

export default function SelectedFilmStore({ children }: { children: any }) {

  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  
  const selectedFilmId = selectedFilm?.id || null;

  return <StoreContext.Provider value={{ selectedFilmId , selectedFilm, setSelectedFilm }}> {children} </StoreContext.Provider>
}
