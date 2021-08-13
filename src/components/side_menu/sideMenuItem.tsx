import { useContext } from 'react';
import { StyledListItem } from '../styled/li.style';
import { StyledListItemSpan } from '../styled/span.style';
import { StoreContext } from '../../store/selectedFilmStore';
import Film from '../../interfaces/film';

function SideMenuItem({ film }: { film: Film }) {

  const { selectedFilm, setSelectedFilm } = useContext(StoreContext);

  const handleClick = () => {
    if (setSelectedFilm) {
      if (film.id === selectedFilm?.id) {
        setSelectedFilm(null);
      } else {
        setSelectedFilm(film);
      }
    }
  }

  const isSelected = film.id === selectedFilm?.id;

  return <StyledListItem onClick={handleClick} isSelected={isSelected}>
    <StyledListItemSpan isSelected={isSelected}>
      {film.title}
    </StyledListItemSpan>
  </StyledListItem>
}

export default SideMenuItem