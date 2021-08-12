import styled from 'styled-components'


export const StyledListItem = styled.li`
justify-content: center;
display: flex;

align-items: center;
//max-height: 150px;
//min-height: 100px;
//height: 20vh;
//background:linear-gradient(to bottom, #fdff9c 5%, #bfbc1b 100%);
//background-color:#ffec64;
//box-shadow: ;

 ${({ selected }: { selected: boolean }) => !selected && "background:linear-gradient(to bottom, #f9dc55 5%, #d6bd4f 100%);"};
background-size: cover;
&: hover {
  ${({ selected }: { selected: boolean }) => !selected && "background:linear-gradient(to bottom, #f9dc55 5%, #fdff9c 100%);"};
  
  //background-color: rgba(100,100,100,0.2);; 
};
`