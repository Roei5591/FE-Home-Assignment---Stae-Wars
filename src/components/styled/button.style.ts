import styled from 'styled-components'

export const AddOrRemoveFromFavoriteButton = styled.button`
box-shadow: 0px 1px 0px 0px #fff6af;
	background:linear-gradient(to bottom, #ffec64 5%, #ff9d00 100%);
	background-color:#ffec64;
	border-radius:6px;
	border:1px solid #ffaa22;
	display:inline-block;
	cursor:pointer;
	color:#333333;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffee66;
  margin: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
 // width: 20% ;


  &:hover{
	  background:linear-gradient(to bottom, #ff9d00 5%, #ffec64 100%);
	  background-color:#ff9d00;
    }
  &:active{
    position:relative;
	  top:1px;
  }
`