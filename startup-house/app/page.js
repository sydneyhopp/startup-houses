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
import bedroom from '/public/final/bed.svg';
import skyline from '/public/final/sunset.svg';
import transish from '/public/illustrations/tiling.png';
import coworkRoom from '/public/illustrations/workroom.png';
import block from '/public/final/lineup.svg';
import basement from '/public/illustrations/basement.png';
import wholehouse from '/public/illustrations/wholehouse.png';
import ImageStick from '@/components/ImageStick/ImageStick';



export default function Scrolly(){

    const livingRoomText = [
      { text: '"We have quiet hours where we keep this a silent space, but other than that it’s collaborative."', start: 0.0, end: 0.1, leave: 0.4},
      { text: '"At 10 a.m. sharp, residents gather for a 10-minute check-in — known as standup — on project progress. If members don’t accomplish what they set out to do, they have to toss a few dollars into the “shame fund” to finance household necessities like a new vacuum."', start: 0.2, end: 0.3, leave: 0.5},
      { text: '"We play games to unwind. We’ve recently gotten really into chess!"', start: 0.4, end: 0.5, leave: 0.7},
    ];

    const kitchenText = [
      { text: '"This is a robot someone made that checks if you washed your dishes. Another startup home has something similar but it takes photos of you and your dirty dishes and tweets it."', start: 0.0, end: 0.2, leave: 0.5},
      { text: 'Fellow, a coffee machine-making brand, gifted SF Parc this machine. It’s put to good use every night. “When I come down here at 3 in the morning, most people are still working."', start: 0.4, end: 0.6, leave: 1.0}
    ]

    const bedText = [
      { text: '“I was working 110 hour weeks in Arcadia (Berkley Residency), so I didn’t talk to anyone, I was kind of just locked in my room all day. Now I’m working 80 hour weeks, so that’s better, and I can actually talk to people. I’m almost always working in my room or a coffee shop."', start: 0.0, end: 0.1, leave: 0.4},
      { text: '"Oh, yeah, there’s someone living in there.” Another startup founder is living in the small room attached to his own.', start: 0.2, end: 0.3, leave: 0.5},
      { text: '"These were here when I moved in.” Arraya thought they matched the futuristic styled interior design, highlighted with geometric shapes and bright colors.', start: 0.4, end: 0.5, leave: 0.7},
    ];

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

          <AnimateOnScroll reappear>
          <div className="leftText">
            <p>Step into SF Parc, a startup home established in July of 2024 by Nick Linck. After graduating from the University of Michigan, he founded The Residency in 2022. Since then, it has expanded to nine startup homes worldwide. Here, “college meets accelerator.”
            </p>
          </div>
          </AnimateOnScroll>

          
          

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

          <AnimateOnScroll reappear>
          <div className="rightContainer">
          <div className="rightText">
            <p>
              According to a <a href="https://jausa.ja.org/news/press-releases/survey-the-new-normal-hasn-t-dampened-teens-interest-in-becoming-entrepreneurs">study</a> in 2020 by Junior Achievement USA, 66 percent of teens between the ages of 13 and 17 said they were "likely" to consider starting a business or becoming an entrepreneur. But 51 percent said they would need more information on what it would take to be successful, and 38 percent said they would need friends with similar interests. 
            </p>
          </div>
          </div>
          </AnimateOnScroll>

          <section className="leftText">
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

        {/* <AnimateOnScroll reappear> */}
        <PairStick imageSrc={livingRoom}
        imageAlt="living room illustration"
        blocks={livingRoomText}>
          <p>“I know people that are all over the spectrum. Some that do have companies, some that don’t, some that have revenue, some that don’t,” said Christopher Arraya.</p>
          <br />
          <p>Arraya joined SF Parc in 2024 without an idea for a startup, after taking a leave of absence from University of North Carolina. Since then, he has become involved in the AI real estate space and is now creating an end-to-end maintenance request system for residential buildings.</p>
        </PairStick>
        {/* </AnimateOnScroll> */}
        
        <AnimateOnScroll reappear>
        <PairStick imageSrc={kitchen}
        imageAlt="kitchen illustration"
        blocks={kitchenText}>
          <p>The SF Parc startup house helped Arraya and others along the way, offering networking opportunities and spaces for collaboration. “We host fireside chats and dinners where we invite tech luminaries to offer their insights. We try to prevent burnout by making everything flexible” said Grant.  
          </p>
        </PairStick>
        </AnimateOnScroll>

        <AnimateOnScroll reappear>
        <div className="rightContainer">
          <div className="rightText">
          <p>Even the most intimate spaces — kitchens, living rooms, bedrooms — hum with the sounds of laptop keyboards and business conversations. “When you live and work with a lot of doers, you get more stuff done,” said Grant.
          </p><br />
          <p>Let Arraya show you around the second floor. 
          </p>
          </div>
        </div>
        </AnimateOnScroll>

        <AnimateOnScroll reappear>
        <PairStick imageSrc={bedroom}
        imageAlt="bedroom illustration"
        blocks={bedText}>
          <p>The house is currently at capacity with 12 residents, but when a room opens up, Ryland Pozniak Daniels, 23, is looking to join The Residency. He launched ARLingo in December of 2024, an app that helps users learn new languages through virtual reality. 
          </p><br />
          <p>
          “I’m interested in joining a San Francisco startup house for the fast-paced and indie-hacker environment,” Daniels said. He is looking for a potential partner who shares his passions for VR and building worlds to explore. “Most of my friends took corporate tech jobs. I want to do my own thing — my own startup. That’s my impetus for coming to Silicon Valley. That’s the way that someone like me can make a difference.”
          </p><br />
          <p>
          Daniels shares sentiments with Nick Linck, founder of The Residency and its San Francisco location, SF Parc. “I have a ton of ideas I want to exist in the world,” Linck said. 
          </p><br />
        </PairStick>
        </AnimateOnScroll>

        <AnimateOnScroll reappear>
        <div className="rightContainer">
        <div className="rightText">
        <p>Linck used to work on five startups at once, but found it unsustainable. The Residency was one of his ideas that enabled people to realize more ideas in a social environment. 
        </p><br />
        <p>“The main reason people go to college is the social experience,” he said. “So let’s recreate that experience but let people do their own thing, their own startups or ideas.”
        </p>

        </div>
        </div>
        </AnimateOnScroll>

        <AnimateOnScroll reappear>
        <div className="leftText">
        <p>SF Parc has a waitlist of over 300 people, so it’s likely to be around for a while. Grant and Linck aim to expand the model while maintaining a sense of community. 
        </p><br />
        <p>“There’s no ideal persona for a startup house, just someone who is curious. We need to focus on community, continue to value authenticity, and encourage people to be themselves,” Grant said.
        </p>
        </div>
        </AnimateOnScroll>

        <AnimateOnScroll reappear>
        <div className="finalImage">
          <Image
          src={skyline}
          alt="illustration of a skyline"
          fill
          style={{ objectFit: 'cover' }}/>
        </div>
        </AnimateOnScroll>

        <div className="finalBlurb">
          <p>Although the pandemic stalled the growth of the tech industry — and the Bay Area’s economy overall — the newer AI startup scene shows promise for development. AI startups have leased an additional 3.9 million square feet of downtown San Francisco office space since 2019, according to a 2024 <a href="https://www.credaily.com/briefs/can-san-franciscos-office-market-rebound-in-2025/">study</a> by CRE Daily.</p>
          <br /><p>Could this expansion extend to startup houses? Grant hopes so. “Eventually I see this as a way to fund other hacker houses around the globe.”</p>
        </div>

        <div className="thanks">
          <p1>
            BAIP 2025
          </p1>

          <p1>Thank you to Hilary for your instruction and guidance, and thank you to Chris for welcoming us into your home!</p1>

          <p1>Built by Sydney Hoppenworth, Design and Reporting by Sofia Flores and Maya Schwartz</p1>

        </div>

        </main>
    )
}
