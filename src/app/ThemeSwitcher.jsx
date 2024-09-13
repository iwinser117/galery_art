"use client";
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.body.setAttribute('data-theme', storedTheme);
    } else {
      setTheme('light');
      document.body.setAttribute('data-theme', 'light');
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (theme) {
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  if (!isVisible) {
    return null;
  }

  const buttonText = theme === 'light' ? 'Modo oscuro' : 'Modo claro';

  return (
    <button 
      onClick={toggleTheme} 
      style={{ fontSize: '24px', padding: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}
      aria-label={`Cambiar a ${buttonText}`}
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
      <span className="sr-only">{buttonText}</span>
    </button>
  );
}