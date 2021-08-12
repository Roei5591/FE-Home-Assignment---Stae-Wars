import styled from 'styled-components'

export const StyledListItemSpan = styled.span`
justify-content: center;
display: flex;
color: ${({ selected }: { selected: boolean }) => selected ? "white" : 'black'};
white-space:nowrap;
//font-size: calc(3px + 2vw);//2.5vw;
font-size: calc(5px + 2vw);//2.5vw;
margin: 0 2vw;
min-width: 100px;
font-weight: 500;
`

export const FilmDetailSpan = styled.span`
color: yellow;
//justify-content: center;
//display: flex;
//background-color: green;
//white-space:nowrap;
font-size: 2vw;
font-weight: 600;
margin: 20px auto 0;
//height: fit-content;

@media only screen and (max-width:${props => props.theme.largeScreenSize}){
   font-size: 3vw;
   margin: 2vh auto;
  }


`