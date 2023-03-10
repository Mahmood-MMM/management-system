import './App.css';
import Dashboard from './Page/Dashboard';
import React, { createContext, useState } from 'react'
import ReactSwitch from "react-switch";

export const ThemeContext = React.createContext(null)

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <Dashboard />
      </div>
    </ThemeContext.Provider>
  );
}

export default App
