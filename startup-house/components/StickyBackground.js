"use client";

import {useState, useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";

const backgroundImages = [
    "/background/block.svg",
    "/background/firstfloor.svg"
]

export default function StickyBackground() {
    const [currIndex, setCurrIndex] = useState(0);

    useEffect(() => {
        backgroundImages.forEach(src => {
          const img = new Image();
          img.src = src;
        });
      }, []);

    useEffect(() => {
        const scroll = () => {
            const scrollY = window.scrollY;

            // switches the image every 1000px scrolled vertical
            // TO DO: change to account for different @media formats

            const newIndex = Math.floor(scrollY/1000) % backgroundImages.length;
            setCurrIndex(newIndex);
        };

        // attach the event listener for scrolling
        window.addEventListener("scroll", scroll);
        scroll(); // this handles initializing "on mount" in case user starts scrolled down???

        // unmount
        return () => 
            window.removeEventListener("scroll", scroll);
    }, []);

    return (
        // SVG BACKGROUND
        <div
            style={{
            position: 'fixed',
            zIndex: -1, // sits behind!!!
            top: 0,
            height: '100vh',
            width: '100%',
            backgroundImage: `url(${backgroundImages[currIndex]})`, // pulling from /public
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: "background-image 0.5s ease-in-out",
            }}
        >
            <AnimatePresence exitBeforeEnter>
                <motion.div
                key={currIndex}
                initial={{ opacity: 0, y:50}}
                animate={{ opacity: 1, y:0}}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    backgroundImage: `url(${backgroundImages[currIndex]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                />
            </AnimatePresence>
        </div>
    )
}