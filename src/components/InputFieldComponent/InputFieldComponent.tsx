"use client";

import { TextField } from "@mui/material";
import React from "react";
import { TextFieldContainer } from "./styles";

type InputFieldComponentProps = {
  id?: string;
  label: string;
  variant?: "outlined";
  type: string;
  fullWidth?: boolean;
  value: string;
  changeValue: (value: string) => void;
  showError: boolean;
};

const InputFieldComponent = ({
  id,
  label,
  variant,
  type,
  fullWidth,
  value,
  changeValue,
  showError,
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
        onChange={(event) => changeValue(event.target.value)}
      />
    </TextFieldContainer>
  );
};

export default InputFieldComponent;
