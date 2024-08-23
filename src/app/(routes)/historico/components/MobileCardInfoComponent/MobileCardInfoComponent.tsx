import { InfoCardComponent } from "@/components/InfoCardComponent/InfoCardComponent";
import { OrderHistoryData } from "@/types/OrderHistoryData.interface";
import { MobileCardInfoContainer } from "./styles";

type MobileCardInfoComponentProps = {
	cardData: OrderHistoryData[];
	options: string[];
	openDetailsModal: () => void;
};

export default function MobileCardInfoComponent({
	cardData,
	options,
	openDetailsModal,
}: MobileCardInfoComponentProps) {
	return (
		<MobileCardInfoContainer>
			{cardData.map((item, index) => (
				<InfoCardComponent
					openDetailsModal={openDetailsModal}
					key={index}
					options={options}
					description={item}
				/>
			))}
		</MobileCardInfoContainer>
	);
}
