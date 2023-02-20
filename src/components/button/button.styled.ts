import styled from "styled-components";

export const ButtonWrap = styled.button`
  margin: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 60px;
  background-color: ${(props) => props.theme.color.white};
  border-radius: ${(props) => props.theme.borderRadius.small};

  box-shadow: 0px 22px 80px 0px rgba(72, 70, 106, 0.07);

  border: none;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.color.blue};
    span {
      color: ${(props) => props.theme.color.white};
    }
  }
`;

export const ButtonText = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.color.categories};

  transition: all 0.2s ease-in-out;
`;
