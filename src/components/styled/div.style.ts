import styled from 'styled-components'

export const AppContainer = styled.div`
  background: ${props => props.theme.backgroundImg};     
  background-size: cover;
  width: 100wh;
  height: 100vh;
  display: flex;
  //grid-template-columns: 1fr 1fr ;
`

export const SideMenuContainer = styled.div`
  //background: url('/stars_backgound.jpg') ; 
  //background-size: cover;
  
  //background: blue;     
  //width: 25%;
  height: 100%;
  //max-height: 100vh;
  //position: absolute;
  //min-width: fit-content;
  //justify-content: center;
`

export const FilmDetailSectionsContainer = styled.div`
  //background: url('/stars_backgound.jpg') ;
  //padding-top: 2% ;
  //background-size: cover;
  //justify-content: center;
  //background: lightgrey;     
  //width: 75%;
  height: 100%;
  //max-height: 100vh;
  //position: absolute;
  //right: 0;
  display: grid;
  grid-template-rows: 1fr 1fr 4fr 1fr;
  overflow-y: auto;
  //justify-content: center;
  //display: flex;
`

export const FilmContentContainer = styled.div`
  //background: url('/stars_backgound.jpg') ; 
  //background-size: cover;
  //justify-content: center;
  //background: lightgrey;     
  width: 100%;
  //height: 100%;
  //position: absolute;
  //right: 0;
  //margin: 0 auto;
  //justify-content: center;
  display: flex;
  @media only screen and (max-width:${props => props.theme.largeScreenSize}){
      //display: flex;
      flex-direction: column;
    }
  //margin-top: 30px;
  //text-align: center;
`

export const StarWarsImgContainer = styled.div`
  //background: url('/stars_backgound.jpg') ; 
  //background-size: cover;
  
  //background: lightgrey;     
  
  height: 100%;
  //width: max-content;
  
  //position: absolute;
  //right: 0;
  width: 100%;
 
  display: flex;
  justify-content: center;

 // margin-top: 30px;
  //text-align: center;
`