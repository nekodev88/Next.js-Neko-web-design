"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ScrollAnimation = ({
  children,
  threshold = 0.1,
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  className = "",
}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current; // เก็บค่าปัจจุบันของ ref ในตัวแปร
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // หยุดฟังเมื่อ scroll มาถึง
        }
      },
      { threshold }
    );
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // ใช้ตัวแปรสำรองแทน ref.current
      }
    };
  }, [threshold]);
  

  return (
    <motion.div
      ref={ref}
      initial={initial} // กำหนดค่าตำแหน่งเริ่มต้นของอนิเมชั่น
      animate={isInView ? animate : {}} // เริ่มอนิเมชั่นเมื่อ scroll มาถึง
      transition={transition} // กำหนด transition
      className={className} // คลาสเพิ่มเติมถ้ามี
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
