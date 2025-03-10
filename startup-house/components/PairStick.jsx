"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

/**
 * @param {string} imageSrc - path to pinned image (e.g. import from /public)
 * @param {string} imageAlt - alt text for the image
 * @param {Array} blocks - array of block objects
 *    Each block: { text: string, start: number, end: number }
 *    "start" and "end" are scrollYProgress breakpoints (0..1) 
 */
export default function SideBySideUseScroll({ imageSrc, imageAlt, blocks = [] }) {
  // We'll measure scroll progress for this container
  const containerRef = useRef(null);

  // scrollYProgress: 0..1 from the top to bottom of containerRef
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      style={{
        display: "grid",
        gridTemplateColumns: "40% 1fr",
        minHeight: "300vh",   // enough vertical space to scroll through multiple blocks
        position: "relative",
      }}
    >
      {/* LEFT COLUMN: pinned image */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Image
          fill
          src={imageSrc}
          alt={imageAlt}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* RIGHT COLUMN: text blocks using scroll-based transforms */}
      <div style={{ padding: "2rem", position: "relative" }}>
        {blocks.map((block, i) => {
          // Destructure the block's start/end (0..1), plus the text
          const { start, end, text } = block;

          // Fade in from 0 -> 1 across [start..end]
          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

          // Slide in from 40px down to 0px up
          const y = useTransform(scrollYProgress, [start, end], [40, 0]);

          return (
            <motion.div
              key={i}
              style={{
                opacity,
                y,
                margin: "20vh 0", // pushes blocks further down so they don't appear at top
              }}
            >
              <p>{text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
