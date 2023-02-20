import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 160px;
  width: calc(100% - 320px);
  height: 60px;
  background-color: ${(props) => props.theme.color.blue};
`;

export const HeaderTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.small};
  font-family: "raleway", sans-serif;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.color.white};
`;

export const HeaderIconWrap = styled.div`
  margin-right: 10px;
  width: 43px;
  height: 43px;
`;

export const HeaderIcon = styled.img`
  width: 43px;
  height: 43px;
`;
