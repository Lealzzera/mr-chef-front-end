import { Button, ButtonProps, CircularProgress } from "@mui/material";
import React from "react";
import { ButtonContainer } from "./styles";

interface ButtonComponentInterface extends ButtonProps {
  textButton: string;
  variant?: "contained" | "outlined" | "text";
  fullWidth?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const ButtonComponent = ({
  textButton,
  variant,
  fullWidth,
  onClick,
  loading,
  ...props
}: ButtonComponentInterface) => {
  return (
    <ButtonContainer>
      <Button
        {...props}
        variant={variant}
        onClick={onClick}
        fullWidth={fullWidth}
      >
        {loading ? <CircularProgress /> : textButton}
      </Button>
    </ButtonContainer>
  );
};

export default ButtonComponent;
