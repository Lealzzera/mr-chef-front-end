import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { OrderHistoryData } from "@/types/OrderHistoryData.interface";
import { TableWrap } from "./styles";
import ChipComponent from "../ChipComponent/ChipComponent";
import { Chip } from "@mui/material";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

type TableHistoryComponentProps = {
	data: OrderHistoryData[];
};

export default function TableHistoryComponent({
	data,
}: TableHistoryComponentProps) {
	return (
		<TableWrap>
			<TableContainer>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Pedido</TableCell>
							<TableCell>Data</TableCell>
							<TableCell>Mesa</TableCell>
							<TableCell>Cliente</TableCell>
							<TableCell>Tipo</TableCell>
							<TableCell>Pagamento</TableCell>
							<TableCell>Garçom</TableCell>
							<TableCell>Status</TableCell>
							<TableCell>Valor</TableCell>
							<TableCell>Ações</TableCell>
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
								<TableRow
									key={id}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
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
										<ButtonComponent textButton='Imprimir' />
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
