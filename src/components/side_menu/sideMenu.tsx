import { SideMenuContainer } from '../styled/div.style'
import { StyledList } from '../styled/ul.style'
import { getFilmsList } from '../../helpers/localForage'
import { useContext, useEffect, useState } from 'react';
import SideMenuItem from './sideMenuItem';
import Film from '../../interfaces/film';
import { StoreContext } from '../../store/selectedFilmStore';

function SideMenu() {

  const [filmsList, setFilmsList] = useState<Film[]>([]);
 
  
  
  useEffect(() => {
    getFilmsList().then(filmsList => {
      setFilmsList(filmsList)
    })
  }, [])


  return <SideMenuContainer>
    <StyledList>
      {
        filmsList.map((film: Film) => {
          return <SideMenuItem key={film.id} film={film} />
        })
      }
    </StyledList>
  </SideMenuContainer>
}

export default SideMenu