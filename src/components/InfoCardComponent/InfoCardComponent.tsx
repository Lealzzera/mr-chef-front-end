import React from "react";
import Card from "@mui/material/Card";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { OrderHistoryData } from "@/types/OrderHistoryData.interface";
import {
	CardActions,
	CardContainer,
	CardContent,
	CardOption,
	CardOptionDescription,
	CardOptionTitle,
} from "./styles";

type InfoCardComponentProps = {
	options: string[];
	description: OrderHistoryData;
};

export function InfoCardComponent({
	options,
	description,
}: InfoCardComponentProps) {
	return (
		<CardContainer>
			<Card>
				<CardContent>
					{options.map((option, index) => (
						<CardOption key={index}>
							<CardOptionTitle>{option}</CardOptionTitle>
							<CardOptionDescription>
								{Object.values(description)[index + 1]}
							</CardOptionDescription>
						</CardOption>
					))}
				</CardContent>
				<CardActions>
					<ButtonComponent
						className='details-button'
						fullWidth
						textButton='Detalhes'
						onClick={() => alert("Detalhes ainda não está pronto")}
						variant='outlined'
					/>
					<ButtonComponent
						fullWidth
						className='print-button'
						onClick={() => alert("Printed")}
						textButton='Imprimir'
					/>
				</CardActions>
			</Card>
		</CardContainer>
	);
}
