import { createContext, useContext } from 'react';
import Film from '../interfaces/film';

interface d {
  selectedFilm: Film | null;
  setSelectedFilm: React.Dispatch<React.SetStateAction<Film | null>>
}

//const { Provider, e } = createContext<d | null>(null);