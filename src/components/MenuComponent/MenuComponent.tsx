"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { menuList } from "@/mocks/menu";
import { MenuContainer } from "./styles";
import { List, ListItemButton, ListItemText } from "@mui/material";
import useWindowLocation from "@/hooks/useWindowLocation";

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
  const menuContainerRef = useRef<HTMLDivElement | null>(null);
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

  const handlePushToRespectivePageButton = (
    pageRouter: string,
    indexButton: number
  ) => {
    activeButtonStyle(indexButton);
    router.push(pageRouter);
    handleMobileMenu(false);
  };

  const handleClickOutsideMobileMenu = (targetValue: EventTarget) => {
    console.log(targetValue);
    return targetValue === menuContainerRef.current
      ? handleMobileMenu(false)
      : null;
  };

  return (
    <MenuContainer
      ref={menuContainerRef}
      onClick={(event) => handleClickOutsideMobileMenu(event.target)}
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
