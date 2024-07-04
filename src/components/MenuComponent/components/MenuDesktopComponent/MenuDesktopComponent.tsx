import { List, ListItemButton, ListItemText } from "@mui/material";
import { MenuDesktop } from "./styes";

import { MenuInterface } from "@/types/Menu.interface";

export function MenuDesktopComponent({
	buttonsList,
	menuList,
	handlePushToRespectivePageButton,
}: MenuInterface) {
	return (
		<MenuDesktop>
			<List ref={buttonsList}>
				{menuList.map((item, indexButton) => (
					<ListItemButton
						className={indexButton === 0 ? "active" : ""}
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
		</MenuDesktop>
	);
}
