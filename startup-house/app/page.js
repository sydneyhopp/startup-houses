"use client";
import { motion } from 'framer-motion';
import React from 'react';
import {useState, useEffect} from "react";
import Image from "next/image";
import StickyBackground from '@/components/StickyBackground/StickyBackground';
import ZoomParallax from '@/components/ZoomParallax/ZoomParallax';
import ImageStick from '@/components/ImageStick/ImageStick';
import AnimateOnScroll from '@/components/AnimateScroll/AnimateScroll'
import door from '/public/illustrations/frontdoor.png';
import kitchen from '/public/illustrations/kitchen.png';
import livingRoom from '/public/illustrations/livingroom.png';
import wholehouse from '/public/background/wholehouse.svg';
import bedroom from '/public/illustrations/bedroom.png';
import skyline from '/public/illustrations/skyline.png';
import transish from '/public/illustrations/tiling.png';
import coworkRoom from '/public/illustrations/workroom.png';
import block from '/public/illustrations/block.png';



export default function Scrolly(){
  let headingSequence = [
    {left: '10vh', top: '20vh', width: '50vw', 
      content: 
      (<><h1>Code, Coffee, and Chaos</h1>
        <h3>A project by Maya, Sofia, and Sydney :)</h3></>), 
      enter: '0', stick: '1', exit:'1.5'
    },

    {left: '10vh', top: '25vh', width: '50vw', 
      content: 
      (<><p>Some live to work; others work to live. In startup homes, or hacker houses, entrepreneurs and startup founders live and work at the same time. Startup residencies house tech enthusiasts who may be searching for co-developers or getting their ideas off the ground.
        </p></>), 
      enter: '.1', stick: '1', exit:'1.5'
    },

    {left: '10vh', top: '30vh', width: '20vw', 
      content: <><p>What happens within these walls?</p></>, 
      enter: '.2',stick:' 1', exit:'1.5'
    }
  ]

  // let firstText = [
  //   {left: '10vh', top: '20vh', width: '50vw', 
  //     content: 
  //     (<><p>Some live to work; others work to live. In startup homes, or hacker houses, entrepreneurs and startup founders live and work at the same time. Startup residencies house tech enthusiasts who may be searching for co-developers or getting their ideas off the ground.
  //       </p></>), 
  //       enter: '.1', stick: '.4', exit:'.5'},
  //   {left: '10vh', top: '40vh', width: '20vw', content: 
  //     (<></>), 
  //     enter: '.5',stick:' .85', exit:'.95'}
  // ]

  // let firstText = [
  //   {left: '10vh', top: '20vh', width: '50vw', 
  //     content: 
  //     (<><p>The San Francisco Bay Area attracts <a href="https://www.startupblink.com/startup-ecosystem/san-francisco-ca-us?page=1">36% of all venture capital investments</a> in the U.S. and is home to over 15,000 startup tech companies.</p></>), 
  //     enter: '.1', stick: '.4', exit:'.5'},
  //   {left: '10vh', top: '40vh', width: '20vw', 
  //     content: (<><p>Startup homes play a key role in this ecosystem. They have been the birthplaces of successful companies like Crossmint and KreaAI which were started in the HF0 residence, and DataSift and Kaggle, of Founders Den. But they are more than a hub of innovation– they are home to community– a stark difference from the Silicon Valley startup culture.</p></>), 
  //     enter: '.5',stick:' .85', exit:'.95'},
  //   {left: '10vh', top: '20vh', width: '50vw', 
  //     content: 
  //     (<><p>“You have the startup ecosystem in Silicon Valley, but it’s sterile and lacks community. The Residency is a home for people looking for community…it’s an open network for creative technologies and people doing all different things,” said  Community Architect Mackay, aged 23.</p></>), 
  //     enter: '.1', stick: '.4', exit:'.5'},
  //   {left: '10vh', top: '20vh', width: '50vw', 
  //     content: 
  //     (<><p>The Residency’s startup homes provide strong support for young people considering startups. According to a study in 2020 from Junior Achievement USA, 66% of teens between the ages of 13 and 17 said they were "likely" to consider starting a business or becoming an entrepreneur. However (51%) said they would need "more information on what it would take to be successful" and (38%) said they would need "friends with similar interests”.</p></>), 
  //     enter: '.1', stick: '.4', exit:'.5'},
  //   {left: '10vh', top: '20vh', width: '50vw', 
  //     content: 
  //     (<><p>Luckily, homes offer a robust program that pairs each resident with a coach to provide support and foster a welcoming community within each space.</p></>), 
  //     enter: '.1', stick: '.4', exit:'.5'}
  // ]

  let firstText = [
    {left: '10vh', top: '20vh', width: '50vw', 
      content: 
      (<><p>Step into SF Parc, a startup home established in July of 2024 by Nick Linck. After graduating from the University of Michigan, he founded The Residency in 2022. Since then, it has expanded to 9 startup homes worldwide. Here, “college meets accelerator.”</p></>), 
      enter: '.1', stick: '.4', exit:'.5'},
    {left: '10vh', top: '40vh', width: '20vw', 
      content: (<><p>From undergraduate students to established industry professionals looking for a change of pace, startup houses are home to entrepreneurs of many backgrounds. 

        “I know people that are all over the spectrum. Some that do have companies, some that don’t, some that have revenue, some that don’t,” said Christopher Arraya.
        
        Arraya joined SF Parc in 2024 without an idea for a startup, after taking a leave of absence from University of North Carolina. Since then, he has become involved in the AI real estate space and is now creating an end-to-end maintenance request system for residential buildings.
        
        The SF Parc startup helped him and others along the way, offering networking opportunities and spaces for collaboration. 
        
        “We host fireside chats and dinners where we invite tech luminaries to offer their insights. We try to prevent burnout by making everything flexible, as well,” said Mackay.</p></>), 
      enter: '.5',stick:' .85', exit:'.95'}
    ]

  let secondText = [
    {left: '10vh', top: '20vh', width: '50vw', 
      content: 
      (<><p>Heelo.</p></>), 
      enter: '.1', stick: '.4', exit:'.5'},
    {left: '10vh', top: '40vh', width: '20vw', 
      content: (<><h1>Testing This</h1></>), 
      enter: '.5',stick:' .85', exit:'.95'}
    ]

  let thirdText = [
    {left: '10vh', top: '20vh', width: '50vw', 
      content: 
      (<><p>Heelo.</p></>), 
      enter: '.1', stick: '.4', exit:'.5'},
    {left: '10vh', top: '40vh', width: '20vw', 
      content: (<><h1>Testing This</h1></>), 
      enter: '.5',stick:' .85', exit:'.95'}
    ]

  let fourthText = [
    {left: '10vh', top: '20vh', width: '50vw', 
      content: 
      (<><p>Heelo.</p></>), 
      enter: '.1', stick: '.4', exit:'.5'},
    {left: '10vh', top: '40vh', width: '20vw', 
      content: (<><h1>Testing This</h1></>), 
      enter: '.5',stick:' .85', exit:'.95'}
    ]

  let fifthText = [
    {left: '10vh', top: '20vh', width: '50vw', 
      content: 
      (<><p>Heelo.</p></>), 
      enter: '.1', stick: '.4', exit:'.5'},
    {left: '10vh', top: '40vh', width: '20vw', 
      content: (<><h1>Testing This</h1></>), 
      enter: '.5',stick:' .85', exit:'.95'}
    ]

    let sixthText = [
      {left: '10vh', top: '20vh', width: '50vw', 
        content: 
        (<><p>Heelo.</p></>), 
        enter: '.1', stick: '.4', exit:'.5'},
      {left: '10vh', top: '40vh', width: '20vw', 
        content: (<><h1>Testing This</h1></>), 
        enter: '.5',stick:' .85', exit:'.95'}
      ]

      let seventhText = [
        {left: '10vh', top: '20vh', width: '50vw', 
          content: 
          (<><p>Heelo.</p></>), 
          enter: '.1', stick: '.4', exit:'.5'},
        {left: '10vh', top: '40vh', width: '20vw', 
          content: (<><h1>Testing This</h1></>), 
          enter: '.5',stick:' .85', exit:'.95'}
        ]

    return (
        <main>
          {/* <AnimateOnScroll reappear> */}
          <ImageStick
            src = {block}
            alt = "illustration of block"
            boxes={headingSequence}
          />
          {/* </AnimateOnScroll> */}
          

          {/* <div className="banner">
            <div className="bannerPic">
              <Image 
                src={block} 
                alt="Block background" 
                fill 
                objectFit="cover" 
                quality={100}
              />
            </div>

            <div className= "textContainer">
              <div className="bannerText">
                <h1>Code, Coffee, and Chaos</h1>
                <h3>A project by Maya, Sofia, and Sydney :)</h3>
              </div>
            </div>
            
          </div> */}


          <AnimateOnScroll reappear>
            <section className="parallaxSection">
              <ZoomParallax/>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll reappear>
          <ImageStick
            src = {coworkRoom}
            alt = "illustration of coworking room"
            boxes={firstText}
          />
          </AnimateOnScroll>

          <AnimateOnScroll reappear>
          <ImageStick
            src = {kitchen}
            alt = "illustration of a kitchen"
            boxes={secondText}
          />
          </AnimateOnScroll>
          <AnimateOnScroll reappear>
          <ImageStick
            src = {livingRoom}
            alt = "illustration of living room"
            boxes={thirdText}
          />
          </AnimateOnScroll>
          <AnimateOnScroll reappear>
          <ImageStick
            src = {bedroom}
            alt = "illustration of bedroom"
            boxes={fourthText}
          />
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
