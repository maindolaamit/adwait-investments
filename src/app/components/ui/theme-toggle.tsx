import { Sun, Moon } from 'lucide-react';
import {useState} from "react"; // Import icons
export function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Theme state

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // document.body.classList.toggle("dark");
  };

  return (
    <button onClick={toggleTheme}>
      {isDarkTheme ? <Moon/> : <Sun className={""} />}
    </button>
  );
}

export default ThemeToggle;