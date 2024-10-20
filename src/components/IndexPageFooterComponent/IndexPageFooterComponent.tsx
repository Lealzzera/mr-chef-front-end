import CopyrightIcon from "@/icons/CopyrightIcon";
import React from "react";
import { CopyRightText, FooterPage } from "./styles";

const IndexPageFooterComponent = () => {
  return (
    <FooterPage>
      <CopyrightIcon />
      <CopyRightText>
        2024 Mr. Chefe. Todos os direitos reservados.
      </CopyRightText>
    </FooterPage>
  );
};

export default IndexPageFooterComponent;
