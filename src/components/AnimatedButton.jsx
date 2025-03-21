/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

function AnimatedButton({ text, onClick, className = '', disabled = false }) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.1 }}
      whileTap={{ scale: disabled ? 1 : 0.9 }}
      className={`btn-primary ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </motion.button>
  );
}

export default AnimatedButton;