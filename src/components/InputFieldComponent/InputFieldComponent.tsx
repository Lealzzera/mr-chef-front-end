"use client";

import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { TextFieldContainer } from "./styles";

type InputFieldComponentProps = {
  id?: string;
  label: string;
  variant?: "outlined";
  type: string;
  fullWidth?: boolean;
  value: string;
  changeValue: (value: any) => void;
  showError: boolean;
} & TextFieldProps;

const InputFieldComponent = ({
  id,
  label,
  variant,
  type,
  fullWidth,
  value,
  changeValue,
  showError,
  ...props
}: InputFieldComponentProps) => {
  return (
    <TextFieldContainer>
      <TextField
        id={id}
        label={label}
        error={showError}
        variant={variant}
        type={type}
        fullWidth={fullWidth}
        value={value}
        onChange={changeValue}
        {...props}
      />
    </TextFieldContainer>
  );
};

export default InputFieldComponent;
