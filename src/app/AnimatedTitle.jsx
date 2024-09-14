"use client";
import React, { useState, useEffect } from 'react';

const AnimatedTitle = () => {
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
      <h1 className='animate_title text-7xl h1_animate'>
        {text}
      </h1>
  );
};

export default AnimatedTitle;