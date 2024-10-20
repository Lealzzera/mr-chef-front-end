"use client";

import ChefLogoIcon from "@/icons/ChefLogoICon";
import {
  CardsInfoSection,
  CreateAccountButtonContainer,
  CreateAccountSection,
  InfoCardsContainer,
  InfoCardsList,
  MainContainer,
  MainInfoCardContainer,
  MainTitle,
  SubTitle,
} from "./styles";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import CardInfoComponent from "../CardInfoComponent/CardInfoComponent";
import RestaurantIcon from "@/icons/RestaurantIcon";
import MenuFoodIcon from "@/icons/MenuFoodIcon";
import AnalyticsIcon from "@/icons/AnalyticsIcon";
import QRCodeIcon from "@/icons/QRCodeIcon";
import ShoppingBagIcon from "@/icons/ShoppingBagIcon";
import SmartphoneIcon from "@/icons/SmartphoneIcon";
import { useRouter } from "next/navigation";
import IndexPageHeaderComponent from "../IndexPageHeaderComponent/IndexPageHeaderComponent";
import IndexPageFooterComponent from "../IndexPageFooterComponent/IndexPageFooterComponent";

const cardsContent = [
  {
    id: 1,
    icon: <MenuFoodIcon />,
    title: "Criação de cardápio",
    subtitle: "Crie e gerencie os itens do seu cardápio facilmente.",
  },
  {
    id: 2,
    icon: <AnalyticsIcon />,
    title: "Analytics",
    subtitle: "Acompanhe suas vendas e obtenha insights valiosos.",
  },
  {
    id: 3,
    icon: <QRCodeIcon />,
    title: "QR CODE",
    subtitle: "Seu cardápio com QR CODE para um pedido mais ágil e fácil.",
  },
  {
    id: 4,
    icon: <ShoppingBagIcon />,
    title: "Integração com o Ifood",
    subtitle: "Integre com o Ifood para pedidos online.",
  },
  {
    id: 5,
    icon: <SmartphoneIcon />,
    title: "Cardápio Virtual",
    subtitle:
      "Crie e customize seu cardápio, tenha na palma da sua mão pelo smartphone.",
  },
  {
    id: 6,
    icon: <ChefLogoIcon />,
    title: "Plataforma PDV",
    subtitle: "Sistema de ponto de venda abrangente para o seu negócio.",
  },
];

export default function IndexPage() {
  const route = useRouter();
  return (
    <MainContainer>
      <IndexPageHeaderComponent />
      <CreateAccountSection>
        <MainTitle>Gerencie seu restaurante com facilidade.</MainTitle>
        <SubTitle>
          Mr. Chefe é a solução completa para gestão de restaurantes.
        </SubTitle>
        <CreateAccountButtonContainer>
          <ButtonComponent
            onClick={() => route.push("/cadastro")}
            textButton="Criar Conta"
          />
        </CreateAccountButtonContainer>
      </CreateAccountSection>
      <CardsInfoSection>
        <MainInfoCardContainer>
          <CardInfoComponent
            cardClass="main-card"
            cardIcon={<RestaurantIcon />}
            cardInfoTitle="Aprovado por mais de 1000+ restaurantes"
            cardInfoSubTitle="Junte-se à crescente comunidade de restaurantes de sucesso usando Mr. Chefe."
          />
        </MainInfoCardContainer>
        <InfoCardsContainer>
          <InfoCardsList>
            {cardsContent.map(({ id, icon, title, subtitle }) => (
              <li key={id}>
                <CardInfoComponent
                  cardIcon={icon}
                  cardInfoTitle={title}
                  cardInfoSubTitle={subtitle}
                />
              </li>
            ))}
          </InfoCardsList>
        </InfoCardsContainer>
      </CardsInfoSection>
      <IndexPageFooterComponent />
    </MainContainer>
  );
}
