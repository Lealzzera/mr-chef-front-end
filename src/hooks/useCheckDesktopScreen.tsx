import { useEffect, useState } from "react";

const useCheckDesktopScreen = () => {
	const [desktopScreen, setDesktopScreen] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			if (window.innerWidth > 1200) {
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

	return desktopScreen;
};

export default useCheckDesktopScreen;
