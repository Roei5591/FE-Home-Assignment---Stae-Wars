import styled from 'styled-components'

export const StyledListItemSpan = styled.span`
justify-content: center;
display: flex;
color: ${({ isSelected }: { isSelected: boolean }) => isSelected ? "white" : 'black'};
white-space: nowrap;
font-size: calc(5px + 2vw);
margin: 0 2vw;
min-width: 100px;
font-weight: 500;
`

export const FilmDetailSpan = styled.span`
color: ${props => props.theme.color};
font-size: 2.2vw;
font-weight: 600;
margin: 20px auto 0;

@media only screen and (max-width:${props => props.theme.largeScreenSize}){
   font-size: 3.2vw;
   margin: 2vh auto;
  }
`