import { FilmDetailSectionsContainer, FilmContentContainer, StarWarsImgContainer } from '../styled/div.style'
import { FilmTitle } from '../styled/h1.style'
import { FilmDetailSpan } from '../styled/span.style';
import { FilmAbstract } from '../styled/p.style';
import { StoreContext } from '../../store/selectedFilmStore';
import FavoriteButton from './FavoriteButton'
import { useContext } from 'react';
import { StarWarsImg } from '../styled/img.style';


export default function FilmDetailSections() {

  const { selectedFilm } = useContext(StoreContext);


  //if no film chosen show Star Wars logo
  if (!selectedFilm) {
    return <StarWarsImgContainer>
      <StarWarsImg src="starwars-logo.png" alt=""></StarWarsImg>
    </StarWarsImgContainer>
  }

  return <FilmDetailSectionsContainer>

    <FilmContentContainer>
      <FilmTitle>
        {selectedFilm.title}
      </FilmTitle>
    </FilmContentContainer>

    <FilmContentContainer>
      <FilmDetailSpan>release date: {selectedFilm?.releaseDate}</FilmDetailSpan>
      <FilmDetailSpan>director: {selectedFilm?.director}</FilmDetailSpan>
    </FilmContentContainer>

    <FilmContentContainer>
      <FilmAbstract>
        {selectedFilm.abstract}
      </FilmAbstract>
    </FilmContentContainer>

    <FilmContentContainer>
      {selectedFilm && <FavoriteButton filmId={selectedFilm.id} />}
    </FilmContentContainer>

  </FilmDetailSectionsContainer >

}

