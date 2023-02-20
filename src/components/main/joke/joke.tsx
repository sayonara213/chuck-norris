import React, { FC } from "react";

import { useAppSelector } from "../../../hooks/hooks";

import { IMAGES } from "../../../constants/images";

import {
  JokeContainer,
  JokeImage,
  JokeImageWrap,
  JokeText,
  JokeWrap,
} from "./joke.styled";
import Loader from "../../loader/loader";

const Joke: FC = () => {
  const { joke, isLoading } = useAppSelector((store) => store.jokeReducer);

  return (
    <JokeContainer>
      <JokeImageWrap>
        <JokeImage src={IMAGES.chuckNorris} />
      </JokeImageWrap>
      <JokeWrap>
        {isLoading ? (
          <Loader />
        ) : (
          <JokeText>
            {joke.value.length > 0 ? joke.value : "Select a category first!"}
          </JokeText>
        )}
      </JokeWrap>
    </JokeContainer>
  );
};

export default Joke;
