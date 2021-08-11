import { SideMenuContainer } from '../styled/div.style'
import { StyledList } from '../styled/ul.style'
import { getFilmsList } from '../../helpers/localForage'
import { useEffect, useRef, useState } from 'react';
import SideMenuItem from './sideMenuItem'

function SideMenu({ selectedFilmId }: { selectedFilmId: number }) {

  const [filmsList, setFilmsList] = useState<any>([])

  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    getFilmsList().then(v => {
      setFilmsList(v)
    })
    if (ref.current !== null) {
      console.log("width", ref.current.offsetWidth)
    }
  }, [])

  return <SideMenuContainer>
    <StyledList ref={ref}>
      {
        filmsList.map((item: any) => {
          return <SideMenuItem key={item.id} title={item.title} />
        })
      }
    </StyledList>
  </SideMenuContainer>
}

export default SideMenu