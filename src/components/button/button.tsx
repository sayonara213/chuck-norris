import React, { FC } from "react";
import { setJoke } from "../../redux/jokeSlice";
import { useAppDispatch } from "../../hooks/hooks";
import { GetJoke } from "../../services/services";

import { ButtonText, ButtonWrap } from "./button.styled";

interface ButtonProps {
  category: string;
}

const Button: FC<ButtonProps> = ({ category }) => {
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    const joke = await GetJoke(category);
    dispatch(setJoke(joke));
  };

  return (
    <ButtonWrap onClick={handleClick}>
      <ButtonText>{category}</ButtonText>
    </ButtonWrap>
  );
};

export default Button;
