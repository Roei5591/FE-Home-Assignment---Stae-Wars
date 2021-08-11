import { useContext } from 'react';
import { StyledListItem } from '../styled/li.style';
import { StyledListItemSpan } from '../styled/span.style';
import { StoreContext } from '../../store/selectedFilmStore';
import Film from '../../interfaces/film';

function SideMenuItem({ film }: { film: Film }) {

  const { selectedFilm, setSelectedFilm } = useContext(StoreContext);

  const handleClick = () => {
    if (setSelectedFilm) {
      setSelectedFilm(film);
    }
  }

  return <StyledListItem onClick={handleClick} selected={film.id === selectedFilm?.id}>
    <StyledListItemSpan>
      {film.title}
    </StyledListItemSpan>
  </StyledListItem>
}

export default SideMenuItem