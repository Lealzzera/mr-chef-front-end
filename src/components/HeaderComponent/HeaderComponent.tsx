"use client";

import React, { useEffect, useState } from "react";
import { HeaderContainer, HeaderContent, MenuMobileButton } from "./styles";
import MenuMobileIcon from "@/icons/MenuMobileIcon";
import useCheckDesktopScreen from "@/hooks/useCheckDesktopScreen";

type HeaderContainerProps = {
	valueMobileMenu: boolean;
	onClickOpenButton: (value: boolean) => void;
};

export default function HeaderComponent({
	valueMobileMenu,
	onClickOpenButton,
}: HeaderContainerProps) {
	const desktopScreen = useCheckDesktopScreen();

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
