"use client";
import { motion } from 'framer-motion';
import React from 'react';
import {useState, useEffect} from "react";
import Image from "next/image";
import StickyBackground from '@/components/StickyBackground/StickyBackground';
import ZoomParallax from '@/components/ZoomParallax/ZoomParallax';

export default function Scrolly(){
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
          
          {/* <section className="stickySection">
            <StickyBackground/>
          </section> */}
          

          {/* Render sticky background! */}
          {/* <StickyBackground /> */}
          {/* added extra content just so it's scrollable lol */}
          

        </main>

    )
}
