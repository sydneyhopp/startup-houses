"use client";
import { motion } from 'framer-motion';
import React from 'react';
import {useState, useEffect} from "react";
import Image from "next/image";
import StickyBackground from '@/components/StickyBackground/StickyBackground';
import ZoomParallax from '@/components/ZoomParallax/ZoomParallax';
import ImageStick from '@/components/ImageStick/ImageStick';
import AnimateOnScroll from '@/components/AnimateScroll/AnimateScroll'
import FadeIn from '@/components/FadeIn/FadeIn';
import door from '/public/illustrations/frontdoor.png';
import kitchen from '/public/illustrations/kitchen.png';
import livingRoom from '/public/illustrations/livingroom.png';
import bedroom from '/public/illustrations/bedroom.png';
import skyline from '/public/illustrations/skyline.png';
import transish from '/public/illustrations/tiling.png';
import coworkRoom from '/public/illustrations/workroom.png';
import block from '/public/illustrations/block.png';
import basement from '/public/illustrations/basement.png';
import firstfloor from '/public/illustrations/firstfloor.jpg';
import secfloor from '/public/illustrations/secfloor.jpg';
import wholehouse from '/public/illustrations/wholehouse.png';



export default function Scrolly(){
  let headingSequence = [
    {left: '10vw', top: '20vh', width: '50vw', 
      content: 
      (<><h1>Code, Coffee, and Chaos</h1>
        <h3>By Sofia Flores, Maya Schwartz, and Sydney Hoppenworth</h3></>), 
      enter: '0', stick: '1', exit:'1.5'
    },

    {left: '10vw', top: '25vh', width: '50vw', 
      content: 
      (<><p>Some live to work; others work to live. In startup homes, or hacker houses, entrepreneurs and startup founders live and work at the same time. Startup residencies house tech enthusiasts who may be searching for co-developers or getting their ideas off the ground.
        </p></>), 
      enter: '.5', stick: '1', exit:'1.5'
    },

    {left: '10vw', top: '30vh', width: '20vw', 
      content: <><p>What happens within these walls?</p></>, 
      enter: '.9',stick:' 1', exit:'1.5'
    }
  ]


  let firstText = [
    {left: '10vw', top: '20vh', width: '40vw', 
      content: 
      (<><p>Step into SF Parc, a startup home established in July of 2024 by Nick Linck. After graduating from the University of Michigan, he founded The Residency in 2022. Since then, it has expanded to 9 startup homes worldwide. Here, “college meets accelerator.”</p></>), 
      enter: '.2', stick: '1', exit:'2'}
    // {left: '10vw', top: '22vh', width: '60vw', 
    //   content: (<>
    //   <p>From undergraduate students to established industry professionals looking for a change of pace, startup houses are home to entrepreneurs of many backgrounds.</p><br/>
    //   <p>“I know people that are all over the spectrum. Some that do have companies, some that don’t, some that have revenue, some that don’t,” said Christopher Arraya.</p><br/>
    //   <p>Arraya joined SF Parc in 2024 without an idea for a startup, after taking a leave of absence from University of North Carolina. Since then, he has become involved in the AI real estate space and is now creating an end-to-end maintenance request system for residential buildings.</p><br/>
    //   <p>The SF Parc startup helped him and others along the way, offering networking opportunities and spaces for collaboration.</p><br/>
    //   <p>“We host fireside chats and dinners where we invite tech luminaries to offer their insights. We try to prevent burnout by making everything flexible, as well,” said Mackay.</p>
    //   </>), 
    //   enter: '.6',stick:'1', exit:'1.5'}
    ]

  let secondText = [
    {left: '55vw', top: '10vh', width: '40vw', 
      content: 
      (<><p>Even the most intimate spaces hum with innovation. That’s the essence of SF Parc—where creativity and startup support are always within reach. “When you live and work with a lot of doers, you get more stuff done,” said Mackay.</p></>), 
      enter: '.2', stick: '1', exit:'2'},
    {left: '55vw', top: '12vh', width: '40vw', 
      content: (<><p>The house is currently at capacity with 12 residents, but when a room opens up, Ryland Pozniak Daniels, 23, is looking to join The Residency. He launched ARLingo in December of 2024, an app that integrates virtual reality experiences with learning new languages.<br/><br/>

        “I’m interested in joining a San Francisco startup house for the fast-paced and indie-hacker environment,” Daniels said. He is looking for a potential partner that shares his passions for VR and building worlds to explore. “Most of my friends took corporate tech jobs. I want to do my own thing– my own startup. That’s my impetus for coming to Silicon Valley. That’s the way that someone like me can make a difference.”<br/><br/>
        
        Daniels shares sentiments with Nick Linck, founder of The Residency and its San Francisco location, SF Parc. “I have a ton of ideas I want to exist in the world,” he said. <br/><br/>
        
        Linck used to work on five startups at once, but found it unsustainable. The Residency was one idea that enabled people to realize more ideas in a social environment. <br/><br/>
        
        “The main reason people go to college is the social experience. So let’s recreate that experience but let people do their own thing, their own startups or ideas,” he said. 
        </p></>), 
      enter: '.6',stick:'1', exit:'1.5'}
    ]

  let thirdText = [
    {left: '10vw', top: '20vh', width: '50vw', 
      content: 
      (<><p>Heelo.</p></>), 
      enter: '.1', stick: '.4', exit:'.5'},
    {left: '10vw', top: '40vh', width: '20vw', 
      content: (<><h1>Testing This</h1></>), 
      enter: '.5',stick:' .85', exit:'.95'}
    ]

  let fourthText = [
    
    {left: '10vw', top: '40vh', width: '20vw', 
      content: (<><h1>Testing This</h1></>), 
      enter: '.2',stick:' 1', exit:'2'}
    ]

  let fifthText = [
    
    {left: '10vw', top: '10vh', width: '40vw', 
      content: (<><h1>still need to add clickable stuff sorry :( </h1></>), 
      enter: '.4',stick:' 1', exit:'2'}
    ]

    let sixthText = [
      {left: '20vw', top: '20vh', width: '40vw', 
        content: 
        (<><p>The future of The Residency’s SF Parc is bright, with a waitlist of over 300 people. Still, with so many members, it is important to maintain community and authenticity. 
</p></>), 
        enter: '.2', stick: '.5', exit:'2'},
      {left: '20vw', top: '22vh', width: '50vw', 
        content: (<><p>“There’s no ideal persona for a startup house, just someone who is curious. We need to focus on community, continue to value authenticity, and encourage people to be themselves,” said Mackay. “Eventually I see this as a way to fund other hacker houses around the globe.”
</p></>), 
        enter: '.5',stick:' .8', exit:'2'},
      {left: '20vw', top: '24vh', width: '20vw', 
        content: (<><p>The Residency’s SF Parc and other startup homes are outlets to support the growth of the startup ecosystem. 
</p></>), 
        enter: '.8',stick:' 1', exit:'2'}
      ]

      let seventhText = [
        {left: '10vw', top: '10vh', width: '40vw', 
          content: 
          (<><p>Although the pandemic certainly slowed the recovery and reputation of San Francisco’s overall economy, the AI startup scene gleans with promise for development and with this, a potential spike in startup house culture. According to a study conducted in 2024 by CRE Daily, AI startups have absorbed 3.9 million square feet of office space since 2019, reflecting San Francisco as a primary market for leasing to AI businesses. 
</p></>), 
          enter: '.2', stick: '.5', exit:'2'},
        {left: '10vw', top: '12vh', width: '40vw', 
          content: (<><p>Could this extend to the very houses in San Francisco neighborhoods, hinting to a rise in startup houses? Only time will tell. But for now, it offers an alternative to formal education with a community that breeds innovation. 
</p></>), 
          enter: '.5',stick:' .8', exit:'2'},
          {left: '10vw', top: '14vh', width: '40vw', 
            content: (<><p>“That was always the goal: personalized education,” said Linck. 
</p></>), 
            enter: '.8',stick:' 1', exit:'2'}
        ]

    return (
        <main>
          <ImageStick
            src = {block}
            alt = "illustration of block"
            boxes={headingSequence}
          >
          </ImageStick>

          <AnimateOnScroll reappear>
            <section className="parallaxSection">
              <ZoomParallax/>
            </section>
          </AnimateOnScroll>
          

          <AnimateOnScroll reappear>
          <ImageStick
            src = {basement}
            alt = "illustration of a workroom basement"
            boxes={firstText}
          />
          </AnimateOnScroll>

          <AnimateOnScroll reappear>
              <div className = "floorContainer">
              <Image
                src = {firstfloor}
                alt = "illustration of the first floor of a house, including a kitchen and living room"
                style = {{zIndex: 5, width: '100vw'}}/>
                <div className = "floorText">
                  <p>From undergraduate students to established industry professionals looking for a change of pace, startup houses are home to entrepreneurs of many backgrounds. <br/><br/>

“I know people that are all over the spectrum. Some that do have companies, some that don’t, some that have revenue, some that don’t,” said Christopher Arraya.<br/><br/>

Arraya joined SF Parc in 2024 without an idea for a startup, after taking a leave of absence from University of North Carolina. Since then, he has become involved in the AI real estate space and is now creating an end-to-end maintenance request system for residential buildings.<br/><br/>

The SF Parc startup helped him and others along the way, offering networking opportunities and spaces for collaboration. <br/><br/>

“We host fireside chats and dinners where we invite tech luminaries to offer their insights. We try to prevent burnout by making everything flexible, as well,” said Mackay.  

                  </p>
                </div>
              </div>
              
          </AnimateOnScroll>
          

          <AnimateOnScroll reappear>
              <div className = "floorContainer">
              <Image
                src = {secfloor}
                alt = "illustration of the second floor of a house, including a bathroom and bedroom"
                style = {{zIndex: 5, width: '100vw'}}/>
                <div className = "floorText">
                  <p>Even the most intimate spaces hum with innovation. That’s the essence of SF Parc—where creativity and startup support are always within reach. “When you live and work with a lot of doers, you get more stuff done,” said Mackay.<br/><br/>
                  The house is currently at capacity with 12 residents, but when a room opens up, Ryland Pozniak Daniels, 23, is looking to join The Residency. He launched ARLingo in December of 2024, an app that integrates virtual reality experiences with learning new languages. <br/><br/>

“I’m interested in joining a San Francisco startup house for the fast-paced and indie-hacker environment,” Daniels said. He is looking for a potential partner that shares his passions for VR and building worlds to explore. “Most of my friends took corporate tech jobs. I want to do my own thing– my own startup. That’s my impetus for coming to Silicon Valley. That’s the way that someone like me can make a difference.”<br/><br/>

Daniels shares sentiments with Nick Linck, founder of The Residency and its San Francisco location, SF Parc. “I have a ton of ideas I want to exist in the world,” he said. <br/><br/>

Linck used to work on five startups at once, but found it unsustainable. The Residency was one idea that enabled people to realize more ideas in a social environment. <br/><br/>

“The main reason people go to college is the social experience. So let’s recreate that experience but let people do their own thing, their own startups or ideas,” he said. 

                  </p>
                </div>
              </div>
              
          </AnimateOnScroll>

          <AnimateOnScroll reappear>
          <ImageStick
            src = {wholehouse}
            alt = "illustration of whole house with interactive clicking elements"
            boxes={fifthText}
          />
          </AnimateOnScroll>

          <AnimateOnScroll reappear>
          <ImageStick
            src = {transish}
            alt = "illustration of colorful tiles"
            boxes={sixthText}
          />
          </AnimateOnScroll>

          <AnimateOnScroll reappear>
          <ImageStick
            src = {skyline}
            alt = "illustration of sf skyline"
            boxes={seventhText}
          />
          </AnimateOnScroll>
          

          
          {/* <section className="stickySection">
            <StickyBackground/>
          </section> */}
          

          {/* Render sticky background! */}
          {/* <StickyBackground /> */}
          {/* added extra content just so it's scrollable lol */}
          

        </main>

    )
}
