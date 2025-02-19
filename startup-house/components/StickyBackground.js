"use client";

import {useState, useEffect} from "react";

const backgroundImages = [
    "/background/block.svg",
    "/background/frontdoor.svg",
    "/background/firstfloor.svg"
]

export default function StickyBackground() {
    const [currIndex, setCurrIndex] = useState(0);

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
            position: 'sticky',
            top: 0,
            height: '100vh',
            width: '100%',
            backgroundImage: `url(${backgroundImages[currIndex]})`, // pulling from /public
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: "background-image 0.5s ease-in-out",
            }}
        >
            {/* You can add further animations or overlays here if desired */}
        </div>
    )
}