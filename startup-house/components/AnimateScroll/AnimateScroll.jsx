import React from 'react';
import { useEffect, useRef, useState } from "react";



const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const makeAppear = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting)
      setIsVisible(true);
  };

  const makeAppearRepeating = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const callBack = options.reappear ? makeAppearRepeating : makeAppear;

  useEffect(() => {
    const containerRefCurrent = containerRef.current
    const observer = new IntersectionObserver(callBack, options);
    if (containerRefCurrent)
      observer.observe(containerRefCurrent);

    return () => {
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent);
      }
    };
  }, [containerRef, options, callBack]);

  return [containerRef, isVisible];
};


const AnimateOnScroll = ({ children, reappear, threshold = 0.2 }) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: threshold,
    reappear: reappear,
  });

  return (
    <>
      <div ref={containerRef} className={`transition duration-500 ${isVisible ? "opacity-100 blur-none translate-y-0" : "opacity-0 blur-2px -translate-y-0"}  motion-reduce:transition-none motion-reduce:hover:transform-none`}>
        {children}
      </div>
    </>
  );
}

export default AnimateOnScroll;