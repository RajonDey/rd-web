"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ImageSlider.module.css";

const images = [
  "/feature-images/rajon-dey.jpg",
  "/feature-images/rajon-dey2.jpg",
  "/feature-images/rajon-dey3.jpg",
  "/feature-images/rajon-dey4.jpg",
  "/feature-images/rajon-dey.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.imageWrapper}>
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            width={500}
            height={400}
            className={`${styles.image} ${
              index === currentIndex ? styles.active : styles.inactive
            }`}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
