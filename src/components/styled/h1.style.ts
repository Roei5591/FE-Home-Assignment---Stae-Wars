import styled from 'styled-components'

export const FilmTitle = styled.h1`
color: ${props => props.theme.color};
font-size: 4.5vw;
text-align: center;
margin: 2vh auto 4vh;
padding-top: 2vh;
padding-bottom: 2vh;
font-weight:600;
@media only screen and (max-width:${props => props.theme.largeScreenSize}){
      margin: 2vh auto 1vh;
      font-size: 5vw;
    }
`