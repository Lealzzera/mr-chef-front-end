"use client";

import React, { useEffect, useState } from "react";
import {
  DesktopCardContainer,
  HistoryContainer,
  HistoryPageTitle,
  MobileCardContainer,
  SkeletonContainer,
} from "./styles";
import SkeletonTable from "@/components/SkeletonTable/SkeletonTable";
import { historyData } from "@/mocks/history.mock";
import DesktopTableComponent from "./components/DesktopTableComponent/DesktopTableComponent";
import MobileCardInfoComponent from "./components/MobileCardInfoComponent/MobileCardInfoComponent";
import { ModalOrderInfo } from "@/components/ModalOrderInfo/ModalOrderInfo";

const HistoryPage = () => {
  const [loading, setLoading] = useState(true);
  const [openModalOrderInfo, setOpenModalOrderInfo] = useState(false);
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

  const handleOpenModalOrderInfo = () => {
    setOpenModalOrderInfo(true);
  };
  return (
    <HistoryContainer className="main-container">
      <ModalOrderInfo
        closeModal={() => setOpenModalOrderInfo(false)}
        openModal={openModalOrderInfo}
      />
      <HistoryPageTitle className="main-page-title">
        Histórico de Pedidos
      </HistoryPageTitle>
      <DesktopCardContainer>
        {loading ? (
          //TODO: Move it to inside DesktopTableComponent soon
          <SkeletonContainer>
            <SkeletonTable skeletonSize={15} />
          </SkeletonContainer>
        ) : (
          <DesktopTableComponent options={options} historyData={historyData} />
        )}
      </DesktopCardContainer>

      <MobileCardContainer>
        {loading ? (
          <SkeletonTable variant="rectangular" skeletonSize={10} />
        ) : (
          <MobileCardInfoComponent
            openDetailsModal={handleOpenModalOrderInfo}
            options={options}
            cardData={historyData}
          />
        )}
      </MobileCardContainer>
    </HistoryContainer>
  );
};

export default HistoryPage;
