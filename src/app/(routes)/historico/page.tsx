"use client";

import React, { useEffect, useState } from "react";
import { HistoryContainer, TableHistoryContainer } from "./styles";
import SkeletonTable from "@/components/SkeletonTable/SkeletonTable";
import TableHistoryComponent from "@/components/TableHistoryComponent/TableHistoryComponent";
import { historyData } from "@/mocks/history.mock";

const HistoryPage = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);
	return (
		<HistoryContainer className='main-container'>
			<h1 className='main-page-title'>Histórico de Pedidos</h1>
			{loading && <SkeletonTable skeletonSize={10} />}
			{!loading && (
				<TableHistoryContainer>
					<TableHistoryComponent data={historyData} />
				</TableHistoryContainer>
			)}
		</HistoryContainer>
	);
};

export default HistoryPage;
