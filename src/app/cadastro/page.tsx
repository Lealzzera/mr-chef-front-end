"use client";

import IndexPageHeaderComponent from "@/components/IndexPageHeaderComponent/IndexPageHeaderComponent";
import {
  ButtonContainer,
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

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmedPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      cpf: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmedPassword: "",
    });
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
            />
            <InputFieldComponent
              showError={false}
              value={formData.email}
              name="email"
              changeValue={handleChange}
              type="text"
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
              label="Telefone"
            />
            <InputFieldComponent
              showError={false}
              value={formData.password}
              changeValue={handleChange}
              name="password"
              type="password"
              fullWidth
              label="Senha"
            />
            <InputFieldComponent
              showError={false}
              changeValue={handleChange}
              type="password"
              name="confirmedPassword"
              value={formData.confirmedPassword}
              fullWidth
              label="Confirme sua senha"
            />
          </SignUpFormWrappFields>
          <ButtonContainer>
            <ButtonComponent
              disabled={false}
              type="submit"
              fullWidth
              textButton="Criar Conta"
            />
          </ButtonContainer>
        </SignUpForm>
      </FormContainer>
    </>
  );
}
