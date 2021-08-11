import { createContext, useState } from 'react';
import { AppContainer } from './styled/div.style';
import SideMenu from './side_menu/sideMenu';
import Film from '../interfaces/film';
import FilmDetailSections from './film_detail_section/filmDetailSection';



function App() {

  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  return (
    //<SelectedFilmContext.Provider value={setSelectedFilm}>
    <AppContainer>

      <SideMenu selectedFilmId={1} />
      <FilmDetailSections />
    </AppContainer >
    // </SelectedFilmContext.Provider>

  );
}
export default App;
