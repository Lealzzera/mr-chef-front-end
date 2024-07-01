import { Button } from "@mui/material";
import React from "react";
import { ButtonContainer } from "./styles";

type ButtonComponentProps = {
	textButton: string;
	variant?: "contained" | "outlined" | "text";
	fullWidth?: boolean;
	onClick?: () => void;
};

const ButtonComponent = ({
	textButton,
	variant,
	fullWidth,
	onClick,
	...props
}: ButtonComponentProps) => {
	return (
		<ButtonContainer>
			<Button
				{...props}
				variant={variant}
				onClick={onClick}
				fullWidth={fullWidth}
			>
				{textButton}
			</Button>
		</ButtonContainer>
	);
};

export default ButtonComponent;
