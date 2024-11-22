"use client";

import IndexPageHeaderComponent from "@/components/IndexPageHeaderComponent/IndexPageHeaderComponent";
import {
  ButtonContainer,
  ErrorMessage,
  FormContainer,
  SignUpForm,
  SignUpFormWrappFields,
  SubtitleForm,
  TitleForm,
  TitleIconContainer,
} from "./styles";
import ChefLogoIcon from "@/icons/ChefLogoICon";
import InputFieldComponent from "@/components/InputFieldComponent/InputFieldComponent";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";
import React, { useState } from "react";
import IndexPageFooterComponent from "@/components/IndexPageFooterComponent/IndexPageFooterComponent";
import { validateAndFormatCpf } from "@/helpers/validateAndFormatCpf";
import { validateAndFormatPhoneNumber } from "@/helpers/validateAndFormatPhoneNumber";
import { removeDashAndDots } from "@/helpers/removeDashAndDots";
import { registerUser } from "@/functions/api";
import { validatePassword } from "@/helpers/validatePassword";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/userContext/userContext";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmedPassword: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const route = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name !== "cpf" && name !== "phoneNumber") {
      setFormData((prevValue) => ({
        ...prevValue,
        [name]: value,
      }));
    }
    if (name === "cpf") {
      const formattedCPF = validateAndFormatCpf(value);
      setFormData((prevValue) => ({
        ...prevValue,
        [name]: formattedCPF,
      }));
    }
    if (name === "phoneNumber") {
      const formattedPhoneNumber = validateAndFormatPhoneNumber(value);
      setFormData((prevValue) => ({
        ...prevValue,
        [name]: formattedPhoneNumber,
      }));
    }
  };

  const clearFormData = () => {
    setFormData({
      name: "",
      cpf: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmedPassword: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isPasswordValid = validatePassword({
      password: formData.password,
      confirmPassword: formData.confirmedPassword,
    });
    setError(false);
    setErrorMessage("");

    if (!isPasswordValid.valid) {
      setError(true);
      setErrorMessage(isPasswordValid.message);
      return;
    }

    const response = await registerUser({
      name: formData.name,
      cpf: removeDashAndDots(formData.cpf),
      email: formData.email,
      phoneNumber: removeDashAndDots(formData.phoneNumber),
      password: formData.password,
    });

    if (response?.message?.statusCode === 409) {
      setError(true);
      setErrorMessage("Email fornecido ou número de telefone já existe.");
      return;
    }

    route.push("/login");
    clearFormData();
  };
  return (
    <>
      <IndexPageHeaderComponent />
      <FormContainer>
        <TitleIconContainer>
          <ChefLogoIcon />
          <TitleForm>Cadastre-se no Mr. Chefe</TitleForm>
          <SubtitleForm>
            Crie sua conta e gerencie seu restaurante com facilidade.
          </SubtitleForm>
        </TitleIconContainer>
        <SignUpForm onSubmit={handleSubmit}>
          <SignUpFormWrappFields>
            <InputFieldComponent
              showError={false}
              type="text"
              name="name"
              value={formData.name}
              changeValue={handleChange}
              fullWidth
              label="Nome Completo"
            />
            <InputFieldComponent
              showError={false}
              changeValue={handleChange}
              name="cpf"
              type="text"
              value={formData.cpf}
              fullWidth
              label="CPF"
              maxLength={14}
              minLength={14}
            />
            <InputFieldComponent
              showError={false}
              value={formData.email}
              name="email"
              changeValue={handleChange}
              type="email"
              fullWidth
              label="E-mail"
            />
            <InputFieldComponent
              showError={false}
              value={formData.phoneNumber}
              name="phoneNumber"
              changeValue={handleChange}
              type="text"
              fullWidth
              maxLength={15}
              minLength={15}
              label="Telefone"
            />
            <InputFieldComponent
              showError={error}
              value={formData.password}
              changeValue={handleChange}
              name="password"
              type="password"
              fullWidth
              label="Senha"
            />
            <InputFieldComponent
              showError={error}
              changeValue={handleChange}
              type="password"
              name="confirmedPassword"
              value={formData.confirmedPassword}
              fullWidth
              label="Confirme sua senha"
            />
          </SignUpFormWrappFields>
          <ButtonContainer>
            <div>
              <ErrorMessage>{errorMessage}</ErrorMessage>
            </div>
            <ButtonComponent
              disabled={
                !formData.name ||
                !formData.cpf ||
                !formData.email ||
                !formData.phoneNumber ||
                !formData.password ||
                !formData.confirmedPassword ||
                formData.cpf.length < 14 ||
                formData.phoneNumber.length < 15
              }
              type="submit"
              fullWidth
              textButton="Criar Conta"
            />
          </ButtonContainer>
        </SignUpForm>
      </FormContainer>
      <IndexPageFooterComponent />
    </>
  );
}
