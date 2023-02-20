import React, { FC } from "react";
import {
  JokeContainer,
  JokeImage,
  JokeImageWrap,
  JokeText,
  JokeWrap,
} from "./joke.styled";
import { useAppSelector } from "../../../hooks/hooks";
import { IMAGES } from "../../../constants/images";

const Joke: FC = () => {
  const joke = useAppSelector((state) => state.joke.joke.value);

  return (
    <JokeContainer>
      <JokeImageWrap>
        <JokeImage src={IMAGES.chuckNorris} />
      </JokeImageWrap>
      <JokeWrap>
        <JokeText>
          {joke.length > 0 ? joke : "Select a category first!"}
        </JokeText>
      </JokeWrap>
    </JokeContainer>
  );
};

export default Joke;
