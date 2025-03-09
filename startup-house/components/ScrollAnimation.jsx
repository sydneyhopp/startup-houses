import { useEffect, useRef, useState } from 'react';

export default function ScrollAnimation({children}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref}
      className={`fade-up ${visible ? 'scrolled' : ''}`}
      style={{ minHeight: '100vh', marginTop: '150vh' }} // just so you can scroll down
    >
      {children}
    </div>
  );
}
