import React, { useState, useEffect } from "react";

const footerStyle = {
  backgroundColor: "#f8f9fa",
  padding: "20px",
  textAlign: "center",
};

const footerStyleSmallScreen = {
  display: "none",
};

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        ...footerStyle,
        ...(isSmallScreen ? footerStyleSmallScreen : {}),
      }}
    >
      <p>© 2024 Your Company. All rights reserved.</p>
    </div>
  );
};

export default Footer;
