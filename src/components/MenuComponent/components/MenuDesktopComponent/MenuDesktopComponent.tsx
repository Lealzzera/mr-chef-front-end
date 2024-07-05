import { List, ListItemButton, ListItemText } from "@mui/material";
import { MenuDesktop } from "./styes";

import { MenuInterface } from "@/types/Menu.interface";
import useWindowLocation from "@/hooks/useWindowLocation";

export function MenuDesktopComponent({
	buttonsList,
	menuList,
	handlePushToRespectivePageButton,
}: MenuInterface) {
	const location = useWindowLocation();

	return (
		<MenuDesktop>
			<List ref={buttonsList}>
				{menuList.map((item, indexButton) => (
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
		</MenuDesktop>
	);
}
