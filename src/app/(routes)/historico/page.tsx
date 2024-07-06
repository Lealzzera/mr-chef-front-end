"use client";

import React, { useEffect, useState } from "react";
import {
	HistoryContainer,
	HistoryPageTitle,
	MobileCardContainer,
} from "./styles";
import SkeletonTable from "@/components/SkeletonTable/SkeletonTable";
import { historyData } from "@/mocks/history.mock";
import useCheckDesktopScreen from "@/hooks/useCheckDesktopScreen";
import DesktopTableComponent from "./components/DesktopTableComponent/DesktopTableComponent";
import MobileCardInfoComponent from "./components/MobileCardInfoComponent/MobileCardInfoComponent";

const HistoryPage = () => {
	const [loading, setLoading] = useState(false);
	const desktopScreen = useCheckDesktopScreen();
	const options = [
		"Pedidos",
		"Data",
		"Mesa",
		"Cliente",
		"Tipo",
		"Pagamento",
		"Garçom",
		"Status",
		"Valor",
	];

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);
	return (
		<HistoryContainer className='main-container'>
			<HistoryPageTitle className='main-page-title'>
				Histórico de Pedidos
			</HistoryPageTitle>
			{loading && desktopScreen && desktopScreen !== null && (
				<SkeletonTable skeletonSize={10} />
			)}
			{!loading && desktopScreen && desktopScreen !== null && (
				<DesktopTableComponent options={options} historyData={historyData} />
			)}
			{!loading && !desktopScreen && desktopScreen !== null && (
				<MobileCardContainer>
					<MobileCardInfoComponent options={options} cardData={historyData} />
				</MobileCardContainer>
			)}
		</HistoryContainer>
	);
};

export default HistoryPage;
