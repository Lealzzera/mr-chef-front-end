"use client";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { MenuDesktop, MenuMobileContainer } from "./styles";

type MenuComponentProps = {
	openMobileMenu?: boolean;
	handleMobileMenu: (value: boolean) => void;
};

//TODO: REMOVE THIS MOCK
const menuList = [
	{ id: 1, text: "Pedidos", icon: "", routeUrl: "/pedidos" },
	{
		id: 2,
		text: "Histórico de pedidos",
		icon: "",
		routeUrl: "/historico",
	},
	{ id: 3, text: "Cardápio", icon: "", routeUrl: "/cardapio" },
	{ id: 4, text: "Entregadores", icon: "", routeUrl: "/entregadores" },
	{ id: 5, text: "Meu Desempenho", icon: "", routeUrl: "/desempenho" },
	{ id: 6, text: "Minha Conta", icon: "", routeUrl: "/conta" },
	{ id: 7, text: "Sugestões", icon: "", routeUrl: "/sugestoes" },
	{ id: 8, text: "Promoções", icon: "", routeUrl: "/promocoes" },
	{ id: 9, text: "Mesas", icon: "", routeUrl: "/mesas" },
	{ id: 10, text: "Garçons", icon: "", routeUrl: "/garcons" },
	{ id: 11, text: "Avaliações", icon: "", routeUrl: "/avaliacoes" },
	{ id: 12, text: "Cupons", icon: "", routeUrl: "/cupons" },
	{ id: 13, text: "Planos", icon: "", routeUrl: "/planos" },
];

const MenuComponent = ({
	openMobileMenu,
	handleMobileMenu,
}: MenuComponentProps) => {
	const [desktopScreen, setDesktopScreen] = useState(false);
	const router = useRouter();
	const menuMobileRef = useRef(null);

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

	const handlePushToRespectivePageButton = (pageRouter: string) => {
		handleMobileMenu(!openMobileMenu);
		router.push(pageRouter);
	};

	const handleCloseMobileMenu = (targetValue: any) => {
		return targetValue === menuMobileRef.current
			? handleMobileMenu(false)
			: null;
	};

	return (
		<>
			{!desktopScreen && (
				<MenuMobileContainer
					ref={menuMobileRef}
					onClick={(event) => handleCloseMobileMenu(event.target)}
					className={openMobileMenu ? "openMenu" : ""}
				>
					<List>
						{menuList.map((item) => (
							<ListItemButton
								onClick={() => handlePushToRespectivePageButton(item.routeUrl)}
								key={item.id}
							>
								<ListItemText>{item.text}</ListItemText>
							</ListItemButton>
						))}
					</List>
				</MenuMobileContainer>
			)}
			{/* TODO: SET OPTIONS ICONS AND ADJUST BUTTON STYLE WHEN CLICK ON IT */}
			{desktopScreen && (
				<MenuDesktop>
					<List>
						{menuList.map((item) => (
							<ListItemButton
								onClick={() => handlePushToRespectivePageButton(item.routeUrl)}
								key={item.id}
							>
								<ListItemText>{item.text}</ListItemText>
							</ListItemButton>
						))}
					</List>
				</MenuDesktop>
			)}
		</>
	);
};

export default MenuComponent;
