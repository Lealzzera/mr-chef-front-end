import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { SkeletonContainer } from "./styles";

type SkeletonTableProps = {
  skeletonSize: number;
  variant?: "circular" | "rectangular" | "rounded" | "text";
};

export default function SkeletonTable({
  skeletonSize,
  variant,
}: SkeletonTableProps) {
  const skeletonRows: React.JSX.Element[] = [];

  for (let i = 0; i < skeletonSize; i++) {
    skeletonRows.push(
      <Box key={i} sx={{ width: `100% ` }}>
        <SkeletonContainer>
          <Skeleton variant={variant} animation="wave" />
        </SkeletonContainer>
      </Box>
    );
  }
  return skeletonRows;
}
