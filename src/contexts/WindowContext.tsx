import React, { createContext, useEffect, useState } from "react";

type WindowContent = {
  isMobile: () => boolean;
};

export const WindowContext = createContext<WindowContent>({
  isMobile: () => false,
});

export const WindowProvider: React.FC = ({ children }) => {
  const mobileMaxWidth = 1024; // md: in tailwind
  const [windowWidth, setWindowWidth] = useState<boolean>(
    window.innerWidth < mobileMaxWidth
  );

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth < mobileMaxWidth;
      setWindowWidth(newWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = () => {
    return windowWidth;
  };

  return (
    <WindowContext.Provider value={{ isMobile }}>
      {children}
    </WindowContext.Provider>
  );
};
