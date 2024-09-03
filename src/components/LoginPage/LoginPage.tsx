"use client";

import React, { SyntheticEvent, useEffect, useState } from "react";
import {
  AccessHereLink,
  AccountInfo,
  ContainerFormInfo,
  ContainerInfo,
  ForgotPasswordLink,
  FormLogin,
  ImageContainer,
  LeftSideContainer,
  LoginDescription,
  LoginTitle,
  MainContainer,
  RightSideContainer,
  TextWrap,
  TitleFormLogin,
} from "./styles";
import Image from "next/image";
import InputFieldComponent from "../InputFieldComponent/InputFieldComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const route = useRouter();

  const preventForm = (event: SyntheticEvent) => {
    event.preventDefault();
    //TODO: remove it when deploy backend with API and auth EP
    if (inputEmailValue.length === 0 && inputPasswordValue.length === 0) {
      setShowError(false);
    }
    if (
      inputEmailValue === "admin@admin.com" &&
      inputPasswordValue === "admin"
    ) {
      setShowError(false);
      route.push("/pedidos");
    } else {
      setShowError(true);
      setErrorMessage("Credenciais inválidas.");
    }
  };

  return (
    <MainContainer>
      <LeftSideContainer>
        <TextWrap>
          <LoginTitle>Gerencie seu restaurante.</LoginTitle>
          <LoginDescription>
            Facilite seu trabalho, melhore sua gestão e alavanque o seu negócio.
          </LoginDescription>
        </TextWrap>
        <ImageContainer>
          <Image
            style={{ maxWidth: "32.188rem" }}
            src={"/images/coffe-shop-login-page.webp"}
            width={515}
            height={515}
            priority
            sizes="100vw"
            layout="responsive"
            alt="coffe-shop-image"
          />
        </ImageContainer>
      </LeftSideContainer>
      <RightSideContainer>
        <ContainerFormInfo>
          <TitleFormLogin>
            Acesse sua conta no <br />
            Mr.Chefe
          </TitleFormLogin>
          <FormLogin onSubmit={preventForm}>
            <InputFieldComponent
              label="E-mail"
              variant="outlined"
              type="email"
              fullWidth
              error={showError}
              errorMessage={errorMessage}
              value={inputEmailValue}
              changeValue={setInputEmailValue}
            />
            <InputFieldComponent
              label="Senha"
              type="password"
              fullWidth
              error={showError}
              errorMessage={errorMessage}
              value={inputPasswordValue}
              changeValue={setInputPasswordValue}
            />
            <ButtonComponent
              type="submit"
              fullWidth={true}
              textButton="Entrar"
            />
          </FormLogin>
          <ContainerInfo>
            <ForgotPasswordLink>Esqueci minha senha</ForgotPasswordLink>
            <AccountInfo>
              Não possui uma conta?
              <AccessHereLink> Acesse aqui</AccessHereLink> <br />e se cadastre!
            </AccountInfo>
          </ContainerInfo>
        </ContainerFormInfo>
      </RightSideContainer>
    </MainContainer>
  );
};

export default LoginPage;
