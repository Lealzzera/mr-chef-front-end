"use client";

import {
  HomePageContainerContent,
  HomePageMainContainer,
  TitleContainer,
  WrapperButtonTitle,
} from "./styles";
import CardStoreComponent from "@/components/CardStoreComponent/CardStoreComponent";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";
import { useEffect, useState } from "react";
import { getCookies } from "cookies-next";
import getStores from "@/actions/getStores";
import { LoadingCardSkeleton } from "@/components/LoadingCardSkeletonComponent/LoadingCardSkeletonComponent";
import { useUserContext } from "@/context/userContext/userContext";
import { getUserData } from "@/actions/getUserData";
import { Skeleton } from "@mui/material";
import { useRouter } from "next/navigation";

type DataCard = {
  cep: string;
  city: string;
  id: number;
  name: string;
  neighborhood: string;
  ownerId: string;
  role: string;
  state: string;
  street: string;
};

export default function Home() {
  const [dataCard, setDataCard] = useState<null | DataCard[]>(null);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState(null);
  const { userId } = getCookies();
  const userContext = useUserContext();
  const route = useRouter();

  async function handleGetData(userId?: string) {
    setLoading(true);
    const [stores, userInfo] = await Promise.all([
      getStores(userId),
      getUserData(userId),
    ]);
    setDataCard(stores.data);
    setUserName(userInfo.data.user.name);
    userContext.handleChangeUserStores(stores.data);
    userContext.handleChangeName(userInfo.data.user.name);
    setLoading(false);
  }

  function handleClickButton(idStore: number) {
    console.log(idStore);
    route.push(`store/${idStore}/pedidos`);
  }

  useEffect(() => {
    handleGetData(userId);
  }, [userId]);
  return (
    <HomePageMainContainer>
      <TitleContainer>
        <WrapperButtonTitle>
          <div>
            {!loading && userName && <h1>Bem vindo {userName}!</h1>}
            {loading && <Skeleton animation="wave" width={150} height={30} />}
          </div>
          <div>
            <ButtonComponent textButton="Nova Loja" variant="outlined" />
          </div>
        </WrapperButtonTitle>
      </TitleContainer>
      <HomePageContainerContent>
        {dataCard &&
          !loading &&
          dataCard.map((item) => (
            <CardStoreComponent
              buttonClick={() => handleClickButton(item.id)}
              key={item.id}
              role={item.role}
              storeName={item.name}
              address={item.street}
            />
          ))}
        {loading && (
          <LoadingCardSkeleton quantity={4} width={300} height={366} />
        )}
      </HomePageContainerContent>
    </HomePageMainContainer>
  );
}
