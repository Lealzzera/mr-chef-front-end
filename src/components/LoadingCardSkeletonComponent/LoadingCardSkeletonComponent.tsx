import { Skeleton } from "@mui/material";
import { ContainerSkeleton } from "./styles";

type LoadingCardSkeletonProps = {
  width: number;
  height: number;
  quantity: number;
};

export function LoadingCardSkeleton({
  width,
  height,
  quantity,
}: LoadingCardSkeletonProps) {
  const skeletonQuantity: React.JSX.Element[] = [];

  for (let i = 0; i < quantity; i++) {
    skeletonQuantity.push(
      <ContainerSkeleton key={i}>
        <Skeleton
          height={height}
          width={width}
          animation="wave"
          variant="rectangular"
        />
      </ContainerSkeleton>
    );
  }
  return skeletonQuantity;
}
