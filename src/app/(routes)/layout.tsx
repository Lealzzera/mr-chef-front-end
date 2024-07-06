"use client";

import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import MenuComponent from "@/components/MenuComponent/MenuComponent";
import { useState } from "react";
import { LayoutContentContainer, MainContentLayout } from "./styles";

export default function RoutesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	const handleToogleMobileMenu = (newValue: boolean) => {
		setOpenMobileMenu(newValue);
		if (newValue) {
			document.body.classList.add("overflow-hidden");
		}
		if (!newValue) {
			document.body.classList.remove("overflow-hidden");
		}
	};
	return (
		<MainContentLayout>
			<HeaderComponent
				valueMobileMenu={openMobileMenu}
				onClickOpenButton={handleToogleMobileMenu}
			/>
			<LayoutContentContainer>
				<MenuComponent
					handleMobileMenu={handleToogleMobileMenu}
					openMobileMenu={openMobileMenu}
				/>
				<div className='layout-pages-container'>{children}</div>
			</LayoutContentContainer>
		</MainContentLayout>
	);
}
