"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from './PairStick.module.scss';

/**
 * @param {string} imageSrc - path to pinned image (e.g. import from /public)
 * @param {string} imageAlt - alt text for the image
 * @param {Array} blocks - array of block objects
 *    Each block: { text: string, start: number, end: number }
 *    "start" and "end" are scrollYProgress breakpoints (0..1) 
 */
export default function SideBySideUseScroll({ imageSrc, imageAlt, blocks = [], children }) {
  // We'll measure scroll progress for this container
  const containerRef = useRef(null);

  // scrollYProgress: 0..1 from the top to bottom of containerRef
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div>
        
    <div
      ref={containerRef}
      className={styles.grid}
    >
      {/* LEFT COLUMN: pinned image */}
      <div
        className={styles.image}
      >
        <Image
          fill
          src={imageSrc}
          alt={imageAlt}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* RIGHT COLUMN: text blocks using scroll-based transforms */}
      <div className={styles.textBlocks}>
        {blocks.map((block, i) => {
          // Destructure the block's start/end (0..1), plus the text
          const { text, start, end, leave } = block;

          // Fade in from 0 -> 1 across [start..end]
          const opacity = useTransform(scrollYProgress, [start, end, leave-0.15], [0, 1, 0]);

          // Slide in from 40px down to 0px up
          const y = useTransform(scrollYProgress, [start, end, end+0.1, leave], ['100vh', '50vh','50vh', '0vh']);

          return (
            <motion.div
              key={i}
              style={{
                opacity,
                y
              }}
              className={styles.block}
            >
              <p>{text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
        <div
        className={styles.bottomBar}>
            {children}
        </div>
    </div>
  );
}
