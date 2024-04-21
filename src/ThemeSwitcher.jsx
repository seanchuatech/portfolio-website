import { useState, useEffect } from 'react';
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-blue-900"
    >
      {darkMode ? <MdSunny /> : <span><IoMdMoon /></span>}
    </button>
  );
};

export default ThemeSwitcher;