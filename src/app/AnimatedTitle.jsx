"use client";
import React, { useState, useEffect } from 'react';

const AnimatedTitle = () => {
  const isDarkMode = localStorage.getItem('theme') === 'dark'; 
  const phrase = "Galería de Arte";
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setText((prev) => prev + phrase[index]);
      setIndex((prev) => prev + 1);
    }, 150);


    if (index === phrase.length) {
      clearTimeout(typingTimer);
    }

    return () => clearTimeout(typingTimer);
  }, [index]);

  return (
    <h1
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '5rem',
        fontWeight: 'bold',
        color: isDarkMode ? 'hsla(180, 32%, 70%, 1)' : 'hsla(2, 88%, 45%, 1)',
        textAlign: 'center',
        margin: '20px 0',
        minHeight: '6rem',
        textShadow: isDarkMode ? '3px 3px 6px rgba(0,0,0,0.4)' : '2px 2px 4px rgba(0,0,0,0.15)',
        letterSpacing: '0.05em',
      }}
    >
      {text}
    </h1>

  );
};

export default AnimatedTitle;