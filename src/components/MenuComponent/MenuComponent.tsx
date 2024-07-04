"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import useCheckDesktopScreen from "@/hooks/useCheckDesktopScreen";
import { MenuMobileComponent } from "./components/MenuMobileComponent/MenuMobileComponent";
import { menuList } from "@/mocks/menu";
import { MenuDesktopComponent } from "./components/MenuDesktopComponent/MenuDesktopComponent";
import { MenuContainer } from "./styles";

type MenuComponentProps = {
	openMobileMenu?: boolean;
	handleMobileMenu: (value: boolean) => void;
};

const MenuComponent = ({
	openMobileMenu,
	handleMobileMenu,
}: MenuComponentProps) => {
	const router = useRouter();
	const menuMobileRef = useRef<HTMLDivElement | null>(null);
	const buttonsList = useRef<HTMLUListElement>(null);
	const desktopScreen = useCheckDesktopScreen();

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
		handleMobileMenu(!openMobileMenu);
		router.push(pageRouter);
	};

	const handleCloseMobileMenu = (targetValue: any) => {
		return targetValue === menuMobileRef.current
			? handleMobileMenu(false)
			: null;
	};

	return (
		<MenuContainer>
			{!desktopScreen && (
				<MenuMobileComponent
					menuList={menuList}
					openMobileMenu={openMobileMenu}
					handleCloseMobileMenu={handleCloseMobileMenu}
					handlePushToRespectivePageButton={handlePushToRespectivePageButton}
					menuMobileRef={menuMobileRef}
					buttonsList={buttonsList}
				/>
			)}
			{desktopScreen && (
				<MenuDesktopComponent
					buttonsList={buttonsList}
					menuList={menuList}
					handlePushToRespectivePageButton={handlePushToRespectivePageButton}
				/>
			)}
		</MenuContainer>
	);
};

export default MenuComponent;
