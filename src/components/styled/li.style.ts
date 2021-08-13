import styled from 'styled-components'


export const StyledListItem = styled.li`
justify-content: center;
display: flex;
align-items: center;
${({ isSelected }: { isSelected: boolean }) => !isSelected && "background:linear-gradient(to bottom, #f9dc55 5%, #d6bd4f 100%);"};
background-size: cover;

&: hover {
  ${({ isSelected }: { isSelected: boolean }) => !isSelected && "background:linear-gradient(to bottom, #f9dc55 5%, #fdff9c 100%);"};

};
`