"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const images = [
    "https://cdn.vnoc.com/profilesuite/model-1.jpg",
    "https://cdn.vnoc.com/profilesuite/model-2.jpg",
    "https://cdn.vnoc.com/profilesuite/model-3.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Start fading in
      }, 500); // Half a second delay for fade-out
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="hero-title">Your Model Profile Multiverse</h1>
            <p className="hero-description">
              Create and build your professional model profile in 2 minutes 
            </p>
            <button className="hero-signup-btn">Sign Up Now</button>
          </div>

          <div className="col-md-6">
            <div className={`${styles.imageWrapper} ${fade ? styles.fadeIn : styles.fadeOut}`}>
              <Image
                src={images[currentImageIndex]}
                alt="Hero Section Image"
                width={500}
                height={500}
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
