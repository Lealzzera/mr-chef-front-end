"use client";

import { useEffect, useState } from "react";

const useWindowLocation = () => {
	const [location, setLocation] = useState("");

	useEffect(() => {
		setLocation(document.location.pathname);
	}, []);

	return location;
};

export default useWindowLocation;
