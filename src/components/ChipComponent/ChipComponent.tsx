import { StatusEnum } from "@/enums/Status.enum";
import { Chip } from "@mui/material";

const ChipComponent = ({ textChip }: { textChip: string }) => {
  const colorTextChip = (status: string) => {
    switch (status) {
      case StatusEnum.DELIVERED:
        return "var(--green-200)";
      case StatusEnum.CANCELED:
        return "var(--red-400)";
      case StatusEnum.PREPARING:
        return "var(--yellow-400)";
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
        size="medium"
        variant="outlined"
      />
    </>
  );
};

export default ChipComponent;
