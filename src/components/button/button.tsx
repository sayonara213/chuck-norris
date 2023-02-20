import React, { FC } from "react";

import { useAppDispatch } from "../../hooks/hooks";
import { fetchJoke } from "../../redux/actionCreator";

import { ButtonText, ButtonWrap } from "./button.styled";

interface ButtonProps {
  category: string;
}

const Button: FC<ButtonProps> = ({ category }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    fetchJoke(dispatch, category);
  };

  return (
    <ButtonWrap onClick={handleClick}>
      <ButtonText>{category}</ButtonText>
    </ButtonWrap>
  );
};

export default Button;
