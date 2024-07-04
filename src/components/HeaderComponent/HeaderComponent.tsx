"use client";

import React, { useEffect, useState } from "react";
import { HeaderContainer, HeaderContent, MenuMobileButton } from "./styles";
import MenuMobileIcon from "@/icons/MenuMobileIcon";

type HeaderContainerProps = {
	valueMobileMenu: boolean;
	onClickOpenButton: (value: boolean) => void;
};

export default function HeaderComponent({
	valueMobileMenu,
	onClickOpenButton,
}: HeaderContainerProps) {
	const [desktopScreen, setDesktopScreen] = useState(false);
	useEffect(() => {
		//TODO: FIGURE OUT A WAY TO EXTRACT THIS "checkScreenSize" FUNCTION TO A HELPER OR UTIL FILE
		const checkScreenSize = () => {
			if (window.innerWidth >= 1200) {
				setDesktopScreen(true);
			} else {
				setDesktopScreen(false);
			}
		};
		checkScreenSize();
		return () => {
			window.addEventListener("resize", checkScreenSize);
		};
	}, []);
	return (
		<HeaderContainer>
			<HeaderContent>Hello John Doe</HeaderContent>
			{!desktopScreen && (
				<MenuMobileButton
					className={valueMobileMenu ? "active" : ""}
					onClick={() => onClickOpenButton(!valueMobileMenu)}
				>
					<MenuMobileIcon />
				</MenuMobileButton>
			)}
		</HeaderContainer>
	);
}
