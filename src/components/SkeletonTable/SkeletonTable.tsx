import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

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
				<Skeleton variant={variant} height={"50px"} animation='wave' />
			</Box>
		);
	}
	return skeletonRows;
}
