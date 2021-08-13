import { AppContainer } from './styled/div.style';
import SideMenu from './side_menu/sideMenu';
import FilmDetailSections from './film_detail_section/filmDetailSection';
import StoreProvider from '../store/selectedFilmStore';
import { ThemeProvider } from 'styled-components';
import { theme } from "../theme";

export default function App() {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <SideMenu />
          <FilmDetailSections />
        </AppContainer >
      </ThemeProvider>
    </StoreProvider>

  );
}

