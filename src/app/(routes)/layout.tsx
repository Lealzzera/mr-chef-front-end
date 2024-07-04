"use client";

import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import MenuComponent from "@/components/MenuComponent/MenuComponent";
import { useState } from "react";

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
		<main>
			<HeaderComponent
				valueMobileMenu={openMobileMenu}
				onClickOpenButton={handleToogleMobileMenu}
			/>
			<div style={{ display: "flex", position: "relative" }}>
				<MenuComponent
					handleMobileMenu={handleToogleMobileMenu}
					openMobileMenu={openMobileMenu}
				/>
				<div className='layout-pages-container'>{children}</div>
			</div>
		</main>
	);
}
