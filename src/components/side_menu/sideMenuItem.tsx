
import { StyledListItem } from '../styled/li.style'
import { StyledListItemSpan } from '../styled/span.style'


function SideMenuItem({ title }: { title: string }) {

  return <StyledListItem>
    <StyledListItemSpan>
      {title}
    </StyledListItemSpan>
  </StyledListItem>
}

export default SideMenuItem