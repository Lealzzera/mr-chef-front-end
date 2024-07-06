import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { OrderHistoryData } from "@/types/OrderHistoryData.interface";
import { TableWrap } from "./styles";
import ChipComponent from "../ChipComponent/ChipComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

type TableHistoryComponentProps = {
	data: OrderHistoryData[];
	options: string[];
};

export default function TableHistoryComponent({
	data,
	options,
}: TableHistoryComponentProps) {
	return (
		<TableWrap>
			<TableContainer>
				<Table
					sx={{ minWidth: 650 }}
					aria-label='Tabela com as informações do histórico de pedidos do restaurante'
				>
					<TableHead>
						<TableRow>
							{options.map((option, index) => (
								<TableCell key={index}>{option}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map(
							({
								id,
								order,
								date,
								table,
								client,
								type,
								payment,
								waiter,
								status,
								price,
							}) => (
								<TableRow key={id}>
									<TableCell>{order}</TableCell>
									<TableCell>{date}</TableCell>
									<TableCell>{table}</TableCell>
									<TableCell>{client}</TableCell>
									<TableCell>{type}</TableCell>
									<TableCell>{payment}</TableCell>
									<TableCell>{waiter}</TableCell>
									<TableCell>
										<ChipComponent textChip={status} />
									</TableCell>
									<TableCell>{price}</TableCell>
									<TableCell>
										<ButtonComponent
											onClick={() => alert("printed")}
											textButton='Imprimir'
										/>
									</TableCell>
								</TableRow>
							)
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</TableWrap>
	);
}
