"use client";

//TODO: CHECK IF IT'S NECESSARY, IF NOT REMOVE IN THE FUTURE
import { useEffect, useState } from "react";

const useCheckDesktopScreen = () => {
  const [desktopScreen, setDesktopScreen] = useState<boolean | null>(null);

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
