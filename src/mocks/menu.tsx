import BikeIcon from "@/icons/BikeIcon";
import CouponsIcon from "@/icons/CouponsIcon";
import DashboardIcon from "@/icons/DashboardIcon";
import HistoryIcon from "@/icons/HistoryIcon";
import MenuIcon from "@/icons/MenuIcon";
import MyAccountIcon from "@/icons/MyAccountIcon";
import OrdersIcon from "@/icons/OrdersIcon";
import PlansIcon from "@/icons/PlansIcon";
import PromoIcon from "@/icons/PromoIcon";
import RateIcon from "@/icons/RateIcon";
import SuggestionsIcon from "@/icons/SuggestionsIcon";
import TablesIcon from "@/icons/TablesIcon";
import WaitersIcon from "@/icons/WaitersIcon";

export const menuList = [
	{
		id: 1,
		text: "Pedidos",
		icon: <OrdersIcon />,
		routeUrl: "/pedidos",
	},
	{
		id: 2,
		text: "Histórico de pedidos",
		icon: <HistoryIcon />,
		routeUrl: "/historico",
	},
	{ id: 3, text: "Cardápio", icon: <MenuIcon />, routeUrl: "/cardapio" },
	{
		id: 4,
		text: "Entregadores",
		icon: <BikeIcon />,
		routeUrl: "/entregadores",
	},
	{
		id: 5,
		text: "Meu Desempenho",
		icon: <DashboardIcon />,
		routeUrl: "/desempenho",
	},
	{ id: 6, text: "Minha Conta", icon: <MyAccountIcon />, routeUrl: "/conta" },
	{
		id: 7,
		text: "Sugestões",
		icon: <SuggestionsIcon />,
		routeUrl: "/sugestoes",
	},
	{ id: 8, text: "Promoções", icon: <PromoIcon />, routeUrl: "/promocoes" },
	{ id: 9, text: "Mesas", icon: <TablesIcon />, routeUrl: "/mesas" },
	{ id: 10, text: "Garçons", icon: <WaitersIcon />, routeUrl: "/garcons" },
	{ id: 11, text: "Avaliações", icon: <RateIcon />, routeUrl: "/avaliacoes" },
	{ id: 12, text: "Cupons", icon: <CouponsIcon />, routeUrl: "/cupons" },
	{ id: 13, text: "Planos", icon: <PlansIcon />, routeUrl: "/planos" },
];
