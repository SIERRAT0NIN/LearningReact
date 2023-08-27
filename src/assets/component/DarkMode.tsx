import { useState } from "react";

function NightMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <button className="btn" id="DarkModeToggle" onClick={toggleDarkMode}>
        {darkMode ? "Day Mode☀" : "Night Mode☾"}
      </button>
      <p>This is a {darkMode ? "dark" : "light"} mode example.</p>
    </div>
  );
}

export default NightMode;
