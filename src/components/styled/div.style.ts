import styled from 'styled-components'

export const AppContainer = styled.div`
  background: url('/stars_backgound.jpg') no-repeat center fixed;     
  background-size: cover;
  width: 100wh;
  height: 100vh;
  display: flex;
  font-family: 'Roboto', sans-serif;
`
export const SideMenuContainer = styled.div`
  height: 100%;
`
export const FilmDetailSectionsContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 4fr 1fr;
  overflow-y: auto;
`
export const FilmContentContainer = styled.div`     
  width: 100%;
  display: flex;
  @media only screen and (max-width:${props => props.theme.largeScreenSize}){
      flex-direction: column;
    }
`
export const StarWarsImgContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`