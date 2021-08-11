import { FilmDetailSectionsContainer, FilmContentContainer } from '../styled/div.style'
import { FilmTitle } from '../styled/h1.style'
import { FilmDetailSpan } from '../styled/span.style';
import { FilmAbstract } from '../styled/p.style';

import { StoreContext } from '../../store/selectedFilmStore';

import FavoriteButton from './FavoriteButton'
import React, { useContext } from 'react';
import { useEffect } from 'react';

import { StarWarsImg } from '../styled/img.style';



export default function FilmDetailSections() {

  const { selectedFilm } = useContext(StoreContext);


  //<FilmAbstract dangerouslySetInnerHTML={replace(selectedFilm?.abstract)}></FilmAbstract >
  const replace = (text: string | undefined) => {
    if (!text) text = "";
    else text = text.replace(/<script.*?<\/script>/g, '<br>')
    //.replace(/<style.*?<\/style>/g, '<br>')
    // .replace(/(<([^>]+)>)/ig, "<br>")
    //.replace(/(?:\r\n\r\n)/g, '<br>')
    //.replace(/(?:\\r\\n\\r\\n)/g, '<br>');
    return { __html: text };
  }

  //<div id="stage"><img src="https://s3.amazonaws.com/csstarwars/starwars-logo.png" alt="Star Wars" /></div>





  if (!selectedFilm) {
    return <FilmDetailSectionsContainer>
      <StarWarsImg src="starwars-logo.png" alt=""></StarWarsImg>
    </FilmDetailSectionsContainer>
  }

  return <FilmDetailSectionsContainer>

    <FilmContentContainer>
      <FilmTitle>
        {selectedFilm?.title}
      </FilmTitle>
    </FilmContentContainer>

    <FilmContentContainer>
      <FilmDetailSpan>{selectedFilm?.releaseDate}</FilmDetailSpan>
      <FilmDetailSpan>{selectedFilm?.director}</FilmDetailSpan>
    </FilmContentContainer>

    <FilmContentContainer>
      <FilmAbstract >{selectedFilm?.abstract}</FilmAbstract>
    </FilmContentContainer>

    <FilmContentContainer>
      {selectedFilm && <FavoriteButton filmId={selectedFilm?.id} />}
    </FilmContentContainer>

  </FilmDetailSectionsContainer >

}

