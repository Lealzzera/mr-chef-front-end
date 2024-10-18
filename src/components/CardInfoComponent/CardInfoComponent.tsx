import React from "react";
import { CardInfoContainer, CardInfoSubTitle, CardInfoTitle } from "./styles";

type CardInfoComponentProps = {
  cardIcon: React.JSX.Element;
  cardInfoTitle: string;
  cardInfoSubTitle: string;
  cardClass?: string;
};

const CardInfoComponent = ({
  cardIcon,
  cardInfoTitle,
  cardInfoSubTitle,
  cardClass,
}: CardInfoComponentProps) => {
  return (
    <CardInfoContainer className={cardClass}>
      {cardIcon}
      <CardInfoTitle>{cardInfoTitle}</CardInfoTitle>
      <CardInfoSubTitle>{cardInfoSubTitle}</CardInfoSubTitle>
    </CardInfoContainer>
  );
};

export default CardInfoComponent;
