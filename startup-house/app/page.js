"use client";
import { motion } from 'framer-motion';
import React from 'react';
import {useState, useEffect, useRef} from "react";1
import Image from "next/image";
import ZoomParallax from '@/components/ZoomParallax/ZoomParallax';
import AnimateOnScroll from '@/components/AnimateScroll/AnimateScroll'
import PairStick from '@/components/PairStick';
import door from '/public/illustrations/frontdoor.png';
import kitchen from '/public/final/kitchen.svg';
import livingRoom from '/public/final/livingroom.svg';
import bedroom from '/public/illustrations/bedroom.png';
import skyline from '/public/illustrations/skyline.png';
import transish from '/public/illustrations/tiling.png';
import coworkRoom from '/public/illustrations/workroom.png';
import block from '/public/final/lineup.svg';
import basement from '/public/illustrations/basement.png';
import wholehouse from '/public/illustrations/wholehouse.png';
import ImageStick from '@/components/ImageStick/ImageStick';



export default function Scrolly(){

    const livingRoomText = [
      { text: '"We have quiet hours where we keep this a silent space, but other than that it’s collaborative."', start: 0.0, end: 0.1, leave: 0.4},
      { text: '"At 10 a.m. sharp, residents gather for a 10-minute check-in — known as standup — on project progress. If members don’t accomplish what they set out to do, they have to toss a few dollars into the “shame fund” to finance household necessities like a new vacuum."', start: 0.3, end: 0.5, leave: 0.7},
      { text: '"We play games to unwind. We’ve recently gotten really into chess!"', start: 0.6, end: 0.8, leave: 1.0},
    ];

    const kitchenText = [
      { text: '"This is a robot someone made that checks if you washed your dishes. Another startup home has something similar but it takes photos of you and your dirty dishes and tweets it."', start: 0.0, end: 0.2, leave: 0.5},
      { text: 'Fellow, a coffee machine-making brand, gifted SF Parc this machine. It’s put to good use every night. “When I come down here at 3 in the morning, most people are still working."', start: 0.4, end: 0.6, leave: 1.0}
    ]

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

          <section className="textBetween">
          <AnimateOnScroll reappear>
            <p>
            Startup homes offer a robust program that pairs each resident with a coach to provide support and foster a welcoming community within each space.            From undergraduate students to established industry professionals looking for a change of pace, startup houses are home to entrepreneurs of many backgrounds. 
            </p>
            </AnimateOnScroll>
            <br />
            <br />
            <AnimateOnScroll reappear>
            <p>
            Let Chrisopher Arraya, a resident of SF Parc, give a tour of the place!
            </p>
            </AnimateOnScroll>
          </section>

        <PairStick imageSrc={livingRoom}
        imageAlt="living room illustration"
        blocks={livingRoomText}>
          <p>“I know people that are all over the spectrum. Some that do have companies, some that don’t, some that have revenue, some that don’t,” said Christopher Arraya.</p>
          <br />
          <p>Arraya joined SF Parc in 2024 without an idea for a startup, after taking a leave of absence from University of North Carolina. Since then, he has become involved in the AI real estate space and is now creating an end-to-end maintenance request system for residential buildings.</p>

        </PairStick>

        <PairStick imageSrc={kitchen}
        imageAlt="kitchen illustration"
        blocks={kitchenText}>
          <p>The SF Parc startup house helped Arraya and others along the way, offering networking opportunities and spaces for collaboration. “We host fireside chats and dinners where we invite tech luminaries to offer their insights. We try to prevent burnout by making everything flexible” said Grant.  
          </p>
        </PairStick>


          

        </main>
    )
}
