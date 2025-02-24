import React from 'react';
import { motion } from 'framer-motion';

export function SlideElement({ children, initial, animate, transition }) {
  return (
    <motion.div
      initial={initial || { opacity: 0, translateY: 50 }}
      animate={animate || { opacity: 1, translateY: 0 }}
      transition={transition || { duration: 0.5 }}
      style={{ width: '100%', maxWidth: '40vw', margin: '1rem' }}
    >
      {children}
    </motion.div>
  );
}