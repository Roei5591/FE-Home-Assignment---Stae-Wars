
import { AppContainer } from './styled/div.style';
import SideMenu from './side_menu/sideMenu';
import FilmDetailSections from './film_detail_section/filmDetailSection';
import StoreProvider from '../store/selectedFilmStore';



function App() {

  return (
    <StoreProvider>
      <AppContainer>
        <SideMenu />
        <FilmDetailSections />
      </AppContainer >
    </StoreProvider>

  );
}
export default App;
