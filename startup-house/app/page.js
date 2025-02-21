"use client";
import { motion } from 'framer-motion';
import React from 'react';
import {useState, useEffect} from "react";
import Image from "next/image";
import StickyBackground from '@/components/StickyBackground/StickyBackground';
import ZoomParallax from '@/components/ZoomParallax/ZoomParallax';
import ImageStick from '@/components/ImageStick/ImageStick';
import doorPic from '/public/background/frontdoor.svg';
import firstPic from '/public/background/firstfloor.svg';
import secPic from '/public/background/secfloor.svg';
import housePic from '/public/background/wholehouse.svg';
import windowPic from '/public/background/window.svg';
import skyPic from '/public/background/skyline.svg';



export default function Scrolly(){

  let firstBoxes = [
    {left: '10vh', top: '20vh', height: '30vh', width: '20vh', content: "hey hey this is the first box", enter: '.1', stick: '.4', exit:'.5'},
    {left: '10vh', top: '40vh', height: '20vh', width: '40vh', content: "second box yayy so sexy", enter: '.5',stick:' .85', exit:'.95'}
  ]
    return (
        <main>
          <div className="banner">
            <h1>Code, Coffee, and Chaos</h1>
            <h3>A project by Maya, Sofia, and Sydney :)</h3>
          </div>
          {/* <div style={{ height: "3000px" }}></div> */}
          <section className="parallaxSection">
            <ZoomParallax/>
          </section>
          <ImageStick
            src = {doorPic}
            alt = "illustration of a front door"
            boxes={firstBoxes}
          />
          <ImageStick
            src = {firstPic}
            alt = "illustration of a first door"
            boxes={firstBoxes}
          />
          <ImageStick
            src = {secPic}
            alt = "illustration of a second door"
            boxes={firstBoxes}
          />
          <ImageStick
            src = {housePic}
            alt = "illustration of whole house"
            boxes={firstBoxes}
          />
          <ImageStick
            src = {windowPic}
            alt = "illustration of window"
            boxes={firstBoxes}
          />
          <ImageStick
            src = {skyPic}
            alt = "illustration of sf skyline"
            boxes={firstBoxes}
          />
          

          
          {/* <section className="stickySection">
            <StickyBackground/>
          </section> */}
          

          {/* Render sticky background! */}
          {/* <StickyBackground /> */}
          {/* added extra content just so it's scrollable lol */}
          

        </main>

    )
}
