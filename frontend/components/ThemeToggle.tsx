import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  const toggle = () => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark');
      setDark(!dark);
      // persist choice
      localStorage.setItem('theme', !dark ? 'dark' : 'light');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') {
        document.documentElement.classList.add('dark');
        setDark(true);
      }
    }
  }, []);

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition"
      aria-label="Toggle dark mode"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
