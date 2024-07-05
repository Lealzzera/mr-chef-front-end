import { MutableRefObject } from "react";
import { MenuMobileContainer } from "./styles";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { MenuInterface } from "@/types/Menu.interface";
import useWindowLocation from "@/hooks/useWindowLocation";

interface MenuMobileComponentProps extends MenuInterface {
	menuMobileRef: MutableRefObject<HTMLDivElement | null>;
	openMobileMenu?: boolean;
	handleCloseMobileMenu: (event: EventTarget) => void;
}

export function MenuMobileComponent({
	menuMobileRef,
	buttonsList,
	menuList,
	openMobileMenu,
	handleCloseMobileMenu,
	handlePushToRespectivePageButton,
}: MenuMobileComponentProps) {
	const location = useWindowLocation();

	return (
		<MenuMobileContainer
			ref={menuMobileRef}
			onClick={(event) => handleCloseMobileMenu(event.target)}
			className={openMobileMenu ? "openMenu" : ""}
		>
			<List ref={buttonsList}>
				{menuList.map((item: any, indexButton: number) => (
					<ListItemButton
						className={item.routeUrl === location ? "active" : ""}
						onClick={() =>
							handlePushToRespectivePageButton(item.routeUrl, indexButton)
						}
						key={item.id}
					>
						<span>{item.icon}</span>
						<ListItemText>{item.text}</ListItemText>
					</ListItemButton>
				))}
			</List>
		</MenuMobileContainer>
	);
}
