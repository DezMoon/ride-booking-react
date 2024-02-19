import React, { useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  const applyTheme = (selectedTheme) => {
    document.documentElement.setAttribute("data-theme", selectedTheme);
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>
          Theme:
          <select value={theme} onChange={toggleTheme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
      {/* Add other settings options */}
    </div>
  );
};

export default Settings;
