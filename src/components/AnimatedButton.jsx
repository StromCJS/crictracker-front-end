import React from "react";
import { motion } from "framer-motion";

function AnimatedButton({ text, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="btn-primary"
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
}

export default AnimatedButton;
