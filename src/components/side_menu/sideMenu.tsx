import { SideMenuContiner } from '../styled/div.style'
import { StyledList } from '../styled/ul.style'
import { StyledListItem } from '../styled/li.style'
import { StyledListItemSpan } from '../styled/span.style'
import { getFilmsList } from '../../helpers/localForage'
import { useEffect, useState } from 'react';
import SideMenuItem from './sideMenuItem'

function SideMenu() {

  const [filmsList, setFilmsList] = useState<any>([])

  useEffect(() => {
    getFilmsList().then(v => {
      console.log(v);
      setFilmsList(v)
    })
  }, [])

  return <SideMenuContiner>
    <StyledList>
      {
        filmsList.map((item: any) => {
          return <SideMenuItem title={item.title} />
        }
        )
      }
    </StyledList>
  </SideMenuContiner>
}

export default SideMenu