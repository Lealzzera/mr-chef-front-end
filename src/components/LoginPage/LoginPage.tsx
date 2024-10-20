"use client";

import React, { SyntheticEvent, useState } from "react";
import {
  AccessHereLink,
  AccountInfo,
  ContainerFormInfo,
  ContainerInfo,
  ErrorMessage,
  ForgotPasswordLink,
  FormLogin,
  ImageContainer,
  LeftSideContainer,
  LoginButtonContainer,
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
import login from "@/actions/login";

const LoginPage = () => {
  const [userInputData, setUserInputData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const route = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInputData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    setErrorMessage("");
    setLoading(true);
    const response = await login({
      email: userInputData.email,
      password: userInputData.password,
    });
    setLoading(false);

    if (response === 401) {
      setErrorMessage("E-mail ou senha inválidos.");
    }

    if (response === 201) {
      route.push("/pedidos");
    }
  };

  const preventForm = async (event: SyntheticEvent) => {
    event.preventDefault();
    await handleLogin();
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
            src={"/images/coffe-shop-login-page.webp"}
            width={515}
            height={515}
            priority
            alt="coffe-shop-image"
            sizes="100vw"
            style={{
              maxWidth: "32.188rem",
              width: "100%",
              height: "auto",
            }}
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
              showError={errorMessage.length > 0}
              type="email"
              name="email"
              fullWidth
              value={userInputData.email}
              changeValue={handleChange}
            />
            <InputFieldComponent
              label="Senha"
              type="password"
              name="password"
              showError={errorMessage.length > 0}
              fullWidth
              value={userInputData.password}
              changeValue={handleChange}
            />
            <LoginButtonContainer>
              <ErrorMessage>{errorMessage}</ErrorMessage>
              <ButtonComponent
                disabled={
                  !userInputData.email || !userInputData.password || loading
                }
                type="submit"
                fullWidth={true}
                textButton="Entrar"
                loading={loading}
              />
            </LoginButtonContainer>
          </FormLogin>
          <ContainerInfo>
            <ForgotPasswordLink>Esqueci minha senha</ForgotPasswordLink>
            <AccountInfo>
              Não possui uma conta?{" "}
              <AccessHereLink onClick={() => route.push("/cadastro")}>
                Acesse aqui
              </AccessHereLink>
              <br />e se cadastre!
            </AccountInfo>
          </ContainerInfo>
        </ContainerFormInfo>
      </RightSideContainer>
    </MainContainer>
  );
};

export default LoginPage;
