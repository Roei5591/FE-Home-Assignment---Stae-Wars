import styled from 'styled-components'

export const AddOrRemoveFromFavoriteButton = styled.button`
	background-color: ${props => props.theme.color};
	border-radius:6px;
	display:inline-block;
	cursor:pointer;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffee66;
  margin: auto 0 2vw 4vw;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
	height: fit-content;
	font-size: 2.5vmin;
	white-space:nowrap;
	border-width: 0;
	padding: 2vmin;
	
  &:hover {
	  background-color:#fdff9c;
    }
  &:active {
    position:relative;
	  top:1px;
  }
`