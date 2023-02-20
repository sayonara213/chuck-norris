import React, { FC } from "react";
import {
  HeaderContainer,
  HeaderIcon,
  HeaderIconWrap,
  HeaderTitle,
} from "./header.styled";
import { IMAGES } from "../../constants/images";

const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderIconWrap>
        <HeaderIcon src={IMAGES.logo} />
      </HeaderIconWrap>
      <HeaderTitle>Chuck Norris</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
