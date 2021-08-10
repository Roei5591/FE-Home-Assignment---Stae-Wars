import styled from 'styled-components'

export const StyledList = styled.ul`
 list-style-type: none;
 margin: 0;
 padding: 0;
 width: auto;
 height: inherit;
 position: relative;
 background-color: red;
 display: grid;
 grid-template-rows: repeat(6, 1fr );;
 overflow-y: auto;
 direction:rtl; 
`