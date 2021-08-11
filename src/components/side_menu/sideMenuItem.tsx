
import { useContext } from 'react';
import { StyledListItem } from '../styled/li.style'
import { StyledListItemSpan } from '../styled/span.style'


function SideMenuItem({ title }: { title: string }) {

  //const setSelectedFilm = useContext();
  const handleClick = () => {

  }

  return <StyledListItem >
    <StyledListItemSpan>
      {title}
    </StyledListItemSpan>
  </StyledListItem>
}

export default SideMenuItem