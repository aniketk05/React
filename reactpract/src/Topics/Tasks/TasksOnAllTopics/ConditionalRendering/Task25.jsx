import React, { useState } from "react";
const Task25 = ({theme}) => {
  const [theme, setTheme] = useState("light");

  // Define themes with their corresponding styles
  const themes = {
    light: {
      backgroundColor: "#ffffff",
      color: "#000000",
    },
    dark: {
      backgroundColor: "#000000",
      color: "#ffffff",
    },
    ocean: {
      backgroundColor: "#0077b6",
      color: "#ffffff",
    },
    forest: {
      backgroundColor: "#014421",
      color: "#e3f2fd",
    },
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div
      style={{
        ...themes[theme],
        minHeight: "100vh",
        padding: "20px",
        transition: "all 0.3s ease",
      }}
    >
      <h1>Theme Selector</h1>
      <p>Select a theme from the dropdown below to change the appearance:</p>
      <select value={theme} onChange={handleThemeChange}>
        <option value="light">Light Theme</option>
        <option value="dark">Dark Theme</option>
        <option value="ocean">Ocean Theme</option>
        <option value="forest">Forest Theme</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
