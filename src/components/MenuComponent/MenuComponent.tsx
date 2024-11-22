"use client";
import { useContext, useRef } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { menuList } from "@/mocks/menu";
import { MenuContainer } from "./styles";
import { List, ListItemButton, ListItemText } from "@mui/material";
import useWindowLocation from "@/hooks/useWindowLocation";
import logout from "@/actions/logout";
import { useUserContext } from "@/context/userContext/userContext";

type MenuComponentProps = {
  openMobileMenu?: boolean;
  handleMobileMenu: (value: boolean) => void;
};

const MenuComponent = ({
  openMobileMenu,
  handleMobileMenu,
}: MenuComponentProps) => {
  const location = useWindowLocation().split("/");
  const formattedLocation = `${location[location.length - 1]}`;
  const router = useRouter();
  const menuMobileRef = useRef<HTMLDivElement | null>(null);
  const buttonsList = useRef<HTMLUListElement>(null);
  const { storeId } = useParams();

  const activeButtonStyle = (index: number) => {
    if (buttonsList.current) {
      const arrayButtonItens = Array.from(buttonsList.current.children);
      arrayButtonItens.forEach((buttonItem) => {
        buttonItem.classList.remove("active");
      });
      arrayButtonItens[index].classList.add("active");
    }
  };

  const handlePushToRespectivePageButton = async (
    pageRouter: string,
    indexButton: number
  ) => {
    activeButtonStyle(indexButton);
    if (pageRouter === "/") {
      await logout();
      router.push("/");
    }
    const builtRoute = `/store/${storeId}${pageRouter}`;
    router.push(builtRoute);

    handleMobileMenu(false);
  };

  const handleCloseMobileMenu = (targetValue: EventTarget) => {
    return targetValue === menuMobileRef.current
      ? handleMobileMenu(false)
      : null;
  };

  return (
    <MenuContainer
      ref={menuMobileRef}
      onClick={(event) => handleCloseMobileMenu(event.target)}
      className={openMobileMenu ? "openMenu" : ""}
    >
      <List ref={buttonsList}>
        {menuList.map(({ id, text, icon, routeUrl }, index) => (
          <ListItemButton
            className={
              routeUrl.split("/")[1] === formattedLocation ? "active" : ""
            }
            onClick={() => handlePushToRespectivePageButton(routeUrl, index)}
            key={id}
          >
            <span>{icon}</span>
            <ListItemText>{text}</ListItemText>
          </ListItemButton>
        ))}
      </List>
    </MenuContainer>
  );
};

export default MenuComponent;
