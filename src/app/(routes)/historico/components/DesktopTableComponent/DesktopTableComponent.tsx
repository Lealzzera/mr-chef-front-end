"use client";
import TableHistoryComponent from "@/components/TableHistoryComponent/TableHistoryComponent";
import { TableHistoryContainer } from "./styles";
import { OrderHistoryData } from "@/types/OrderHistoryData.interface";

type DesktopTableComponentProps = {
	historyData: OrderHistoryData[];
	options: string[];
};

export default function DesktopTableComponent({
	historyData,
	options,
}: DesktopTableComponentProps) {
	return (
		<TableHistoryContainer>
			<TableHistoryComponent options={options} data={historyData} />
		</TableHistoryContainer>
	);
}
