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
          <section className="landContainer"> 
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
          </section>
          
          <AnimateOnScroll reappear>
            <section className="parallaxSection">
              <ZoomParallax/>
            </section>
          </AnimateOnScroll>

          
          <section className="textBetween">
          <AnimateOnScroll reappear>
            <p>
              According to a study in 2020 by Junior Achievement USA, 66 percent of teens between the ages of 13 and 17 said they were "likely" to consider starting a business or becoming an entrepreneur. But 51 percent said they would need more information on what it would take to be successful, and 38 percent said they would need friends with similar interests. 
            </p>
            </AnimateOnScroll>
          </section>
          

          <AnimateOnScroll reappear>
          <section className="pictureBreak">
            <div className="pagePair">
              <div className="testImg">
                <Image
                fill
                src={basement}
                alt="image of basement"
                style={{ objectFit: "cover" }}/>
              </div>

              <div className="testText">
                <p>“You have the startup ecosystem in Silicon Valley, but it’s sterile and lacks community. The Residency is a home for people looking for community … it’s an open network for creative technologies and people doing all different things,” said 23-year-old Mackay Grant. He is the community architect responsible for creating a welcoming social environment in the house. 
                </p>
              </div>
            </div>
          </section>
          </AnimateOnScroll>
          

          <AnimateOnScroll>
          <section className="page">
            <div className="top">
              <p>i am the text on top yay! here's a paragraph: According to a study in 2020 by Junior Achievement USA, 66 percent of teens between the ages of 13 and 17 said they were "likely" to consider starting a business or becoming an entrepreneur. But 51 percent said they would need more information on what it would take to be successful, and 38 percent said they would need friends with similar interests. 
              </p>
            </div>

            <div className="pagePair">
              <div className="testImg">
                <Image
                fill
                src={basement}
                alt="image of basement"
                style={{ objectFit: "cover" }}/>
              </div>

              <div className="testText">
                <p>"You have the startup ecosystem in Silicon Valley, but it’s sterile and lacks community. The Residency is a home for people looking for community … it’s an open network for creative technologies and people doing all different things,” said 23-year-old Mackay Grant. He is the community architect responsible for creating a welcoming social environment in the house.
                </p>
              </div>
            </div>

            <div className="bottom">
              <p>I'm on the bottom yay! heres a paragrpah: Startup homes offer a robust program that pairs each resident with a coach to provide support and foster a welcoming community within each space.
              </p>

            </div>
          </section>
          </AnimateOnScroll>

        </main>
    )
}
