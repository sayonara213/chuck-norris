import styled from "styled-components";

export const JokeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const JokeImageWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const JokeImage = styled.img`
  max-width: 122px;
  max-height: 258px;
  object-fit: cover;
`;

export const JokeWrap = styled.div`
  width: 100%;
  min-height: 115px;
  display: flex;
  justify-content: center;

  background-color: ${(props) => props.theme.color.blue};
  border-radius: ${(props) => props.theme.borderRadius.large};
`;

export const JokeText = styled.p`
  margin: 24px;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.light};
  color: ${(props) => props.theme.color.white};
  line-height: 30px;
`;
