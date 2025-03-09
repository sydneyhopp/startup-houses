"use client";
import { motion } from 'framer-motion';
import React from 'react';
import {useState, useEffect, useRef} from "react";
import Image from "next/image";
import ZoomParallax from '@/components/ZoomParallax/ZoomParallax';
import AnimateOnScroll from '@/components/AnimateScroll/AnimateScroll'
import door from '/public/illustrations/frontdoor.png';
import kitchen from '/public/illustrations/kitchen.png';
import livingRoom from '/public/illustrations/livingroom.png';
import bedroom from '/public/illustrations/bedroom.png';
import skyline from '/public/illustrations/skyline.png';
import transish from '/public/illustrations/tiling.png';
import coworkRoom from '/public/illustrations/workroom.png';
import block from '/public/final/lineup.svg';
import basement from '/public/illustrations/basement.png';
import firstfloor from '/public/illustrations/firstfloor.jpg';
import secfloor from '/public/illustrations/secfloor.jpg';
import wholehouse from '/public/illustrations/wholehouse.png';



export default function Scrolly(){

    return (
        <main>
          <div className="landContainer"> 
            <div className="landing">
              <div className="landingImage">
                <Image
                  fill 
                  objectFit="cover" 
                  src = {block}
                  alt = "Drawing of 5 San Francisco houses in a line.">
                </Image>
              </div>

              <div className="landingText">
                <h1>Code, Coffee, and Chaos</h1>
                <p1>By Sofia Flores, Sydney Hoppenworth, and Maya Schwartz</p1>
                <br />

                  <div className="landingBlurb">
                    <p>Some live to work; others work to live. In startup homes, or hacker houses, entrepreneurs and startup founders live and work at the same time. Startup residencies house tech enthusiasts who may be searching for co-developers or getting their ideas off the ground.</p>
                  </div>

                <div id="openSlide" className="scrolled">
                  <p>What happens within these walls?</p>
                </div>
                

              </div>
            </div>
          </div>
          
          

          <AnimateOnScroll reappear>
            <section className="parallaxSection">
              <ZoomParallax/>
            </section>
          </AnimateOnScroll>

        </main>
    )
}
