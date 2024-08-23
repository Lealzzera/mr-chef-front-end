import { Box, Fade, Modal, Typography } from "@mui/material";

type ModalOrderInfoProps = {
	openModal: boolean;
	closeModal: () => void;
};

export function ModalOrderInfo({ openModal, closeModal }: ModalOrderInfoProps) {
	return (
		<div>
			<Modal
				aria-labelledby='spring-modal-title'
				aria-describedby='spring-modal-description'
				onClose={closeModal}
				open={openModal}
				closeAfterTransition
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Fade in={openModal}>
					<div
						style={{
							background: "var(--white)",
							width: "80vw",
							height: "80vh",
						}}
					></div>
				</Fade>
			</Modal>
		</div>
	);
}
