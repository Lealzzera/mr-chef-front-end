import { StatusEnum } from "@/enums/Status.enum";
import { Chip } from "@mui/material";

const ChipComponent = ({ textChip }: { textChip: string }) => {
	const colorTextChip = (status: string) => {
		switch (status) {
			case StatusEnum.DELIVERED:
				return "var(--light-green)";
			case StatusEnum.CANCELED:
				return "var(--main-red)";
			case StatusEnum.PREPARING:
				return "var(--main-yellow)";
		}
	};
	return (
		<>
			<Chip
				style={{
					fontFamily: "var(--second-font)",
					fontSize: "14px",
					color: `${colorTextChip(textChip)}`,
					border: `2px solid ${colorTextChip(textChip)}`,
				}}
				label={textChip}
				size='medium'
				variant='outlined'
			/>
		</>
	);
};

export default ChipComponent;
