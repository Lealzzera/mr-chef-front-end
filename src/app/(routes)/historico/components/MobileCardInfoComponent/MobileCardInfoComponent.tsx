import { InfoCardComponent } from "@/components/InfoCardComponent/InfoCardComponent";
import { OrderHistoryData } from "@/types/OrderHistoryData.interface";
import { MobileCardInfoContainer } from "./styles";

type MobileCardInfoComponentProps = {
	cardData: OrderHistoryData[];
	options: string[];
};

export default function MobileCardInfoComponent({
	cardData,
	options,
}: MobileCardInfoComponentProps) {
	return (
		<MobileCardInfoContainer>
			{cardData.map((item, index) => (
				<InfoCardComponent key={index} options={options} description={item} />
			))}
		</MobileCardInfoContainer>
	);
}
