"use client";

import ChefLogoIcon from "@/icons/ChefLogoICon";
import React from "react";
import {
  HeaderPage,
  LoginButtonContainer,
  LogoContainer,
  LogoText,
} from "./styles";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useRouter } from "next/navigation";

const IndexPageHeaderComponent = () => {
  const route = useRouter();
  return (
    <HeaderPage>
      <LogoContainer>
        <ChefLogoIcon />
        <LogoText>Mr. Chefe</LogoText>
      </LogoContainer>
      <LoginButtonContainer>
        <ButtonComponent
          onClick={() => route.push("/login")}
          textButton="Login"
          variant="outlined"
        />
      </LoginButtonContainer>
    </HeaderPage>
  );
};

export default IndexPageHeaderComponent;
