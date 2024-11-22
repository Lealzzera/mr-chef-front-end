"use client";

import { Roles } from "@/enums/Roles.enum";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { CardContainer, ContainerButton, ContainerInfo } from "./styles";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

type CardStoreComponentProps = {
  storeName: string;
  address: string;
  role: string;
  buttonClick: (value: string) => void;
};

export default function CardStoreComponent({
  storeName,
  address,
  role,
  buttonClick,
}: CardStoreComponentProps) {
  return (
    <CardContainer>
      <InsertPhotoIcon
        sx={{
          borderRadius: "10px 10px 0px 0px",
          background: "var(--grey-200)",
          width: "100%",
          fontSize: "180px",
          color: "var(--white)",
        }}
      />
      <ContainerInfo>
        <p>
          Loja: <span>{storeName}</span>
        </p>
        <p>
          Endereço: <span>{address}</span>
        </p>
        <p>
          Cargo:{" "}
          <span>
            {(role = Roles.ALL_ACCESS ? "Proprietário" : "Funcionário")}
          </span>
        </p>
      </ContainerInfo>
      <ContainerButton>
        <ButtonComponent onClick={buttonClick} textButton="Acessar" fullWidth />
      </ContainerButton>
    </CardContainer>
  );
}
