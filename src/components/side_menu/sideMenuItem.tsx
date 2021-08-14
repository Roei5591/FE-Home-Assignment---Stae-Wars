import { memo, useContext, useMemo } from 'react';
import { StyledListItem } from '../styled/li.style';
import { StyledListItemSpan } from '../styled/span.style';
import { StoreContext } from '../../store/selectedFilmStore';
import Film from '../../interfaces/film';

function SideMenuItem({ film  }: { film: Film }) {

  const { selectedFilmId ,setSelectedFilm } = useContext(StoreContext);

  const handleClick = () => {
    if (setSelectedFilm) {
      if (film.id === selectedFilmId) {
        setSelectedFilm(null);
      } else {
        setSelectedFilm(film);
      }
    }
  }

  const isSelected = film.id === selectedFilmId;

  return <StyledListItem onClick={handleClick} isSelected={isSelected}>
    <StyledListItemSpan isSelected={isSelected}>
      {film.title}
    </StyledListItemSpan>
  </StyledListItem>
}

export default memo(SideMenuItem);