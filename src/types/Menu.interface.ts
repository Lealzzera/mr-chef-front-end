import { MutableRefObject } from "react";
import { MenuListInterface } from "./MenuList.interface";
export interface MenuInterface {
	buttonsList: MutableRefObject<HTMLUListElement | null>;
	menuList: MenuListInterface[];
	handlePushToRespectivePageButton: (
		pageRouter: string,
		indexButton: number
	) => void;
}
