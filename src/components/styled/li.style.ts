import styled from 'styled-components'


export const StyledListItem = styled.li`
justify-content: center;
display: flex;
background-color: blue;
align-items: center;
min-height: 20%;

background: ${({ selected }: { selected: boolean }) => selected ? 'blue' : 'green'};

&: hover {
  background: url('/stars_backgound.jpg')  no-repeat center fixed; 
  background-size: cover;
}
 
`