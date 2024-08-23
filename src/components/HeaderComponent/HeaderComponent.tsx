"use client";

import React from "react";
import { HeaderContainer, HeaderContent, MenuMobileButton } from "./styles";
import MenuMobileIcon from "@/icons/MenuMobileIcon";

type HeaderContainerProps = {
  valueMobileMenu: boolean;
  onClickOpenButton: (value: boolean) => void;
};

export default function HeaderComponent({
  valueMobileMenu,
  onClickOpenButton,
}: HeaderContainerProps) {
  return (
    <HeaderContainer>
      <HeaderContent>Hello John Doe</HeaderContent>
      <MenuMobileButton
        className={valueMobileMenu ? "active" : ""}
        onClick={() => onClickOpenButton(!valueMobileMenu)}
      >
        <MenuMobileIcon />
      </MenuMobileButton>
    </HeaderContainer>
  );
}
