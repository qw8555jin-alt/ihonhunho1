"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroSlider.module.css';

export default function HeroSlider() {
  const images = ['/images/히어로1.jpeg', '/images/히어로2.jpeg', '/images/히어로3.jpeg'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      {images.map((src, i) => {
        let position = styles.next;
        if (i === index) {
          position = styles.active;
        } else if (i === (index - 1 + images.length) % images.length) {
          position = styles.prev;
        }

        return (
          <div key={src} className={`${styles.slide} ${position}`}>
            <Image 
              src={src} 
              alt={`Lawyer Background ${i + 1}`} 
              fill 
              style={{ objectFit: 'cover' }} 
              priority={i === 0}
            />
          </div>
        );
      })}
      <div className={styles.overlay}></div>
    </div>
  );
}
