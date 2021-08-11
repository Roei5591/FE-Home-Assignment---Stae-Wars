import { FilmDetailSectionsContainer, FilmContentContainer } from '../styled/div.style'
import { FilmTitle } from '../styled/h1.style'
import { FilmDetailSpan } from '../styled/span.style';
import { FilmAbstract } from '../styled/p.style';
import { StoreContext } from '../../store/selectedFilmStore';
import { useContext, useRef } from 'react';
import React from 'react';
import { useEffect } from 'react';
import { StyledComponent } from 'styled-components';

export default function FilmDetailSections() {

  const { selectedFilm } = useContext(StoreContext);



  const replace = (text: string | undefined) => {
    if (!text) text = "";
    else text = text.replace(/<script.*?<\/script>/g, '<br>')
    //.replace(/<style.*?<\/style>/g, '<br>')
    // .replace(/(<([^>]+)>)/ig, "<br>")
    //.replace(/(?:\r\n\r\n)/g, '<br>')
    //.replace(/(?:\\r\\n\\r\\n)/g, '<br>');

    return { __html: text };
  }

  console.log([selectedFilm?.abstract])

  useEffect(() => {


  }, [])

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
      <FilmAbstract dangerouslySetInnerHTML={replace(selectedFilm?.abstract)}></FilmAbstract >

    </FilmContentContainer>

  </FilmDetailSectionsContainer >

}

// <FilmAbstract >{selectedFilm?.abstract}</FilmAbstract>