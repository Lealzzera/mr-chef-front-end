"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { menuList } from "@/mocks/menu";
import { MenuContainer } from "./styles";
import { List, ListItemButton, ListItemText } from "@mui/material";
import useWindowLocation from "@/hooks/useWindowLocation";
import logout from "@/actions/logout";

type MenuComponentProps = {
  openMobileMenu?: boolean;
  handleMobileMenu: (value: boolean) => void;
};

const MenuComponent = ({
  openMobileMenu,
  handleMobileMenu,
}: MenuComponentProps) => {
  const location = useWindowLocation();
  const router = useRouter();
  const menuMobileRef = useRef<HTMLDivElement | null>(null);
  const buttonsList = useRef<HTMLUListElement>(null);

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
    }
    router.push(pageRouter);
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
            className={routeUrl === location ? "active" : ""}
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
