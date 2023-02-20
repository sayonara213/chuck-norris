import styled from "styled-components";

export const CategoriesWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CategoriesTitle = styled.h2`
  margin: 60px 0;
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;
