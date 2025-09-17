'use client';

import React, { useEffect } from 'react';

import styles from '../assets/styles/Hero.module.css';


export default function Hero() {
  useEffect(() => {
    const bootstrapImport = async () => {
      const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
      const carouselElement = document.getElementById('carouselExampleAutoplaying');
      if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
          interval: 5000,
          ride: 'carousel',
          Transition: 'opacity',
        });
      }
    };

    bootstrapImport();
  }, []);

  return (
    <section className="page-hero viewport-height hero-overlay-top">
      <ul className={styles.slideshow}>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
      </ul>


        <div className={styles.fogWrapper}>
          <div id="foglayer_01" className={styles.fog}>
            <div className={styles.image01}></div>
            <div className={styles.image02}></div>
          </div>
          <div id="foglayer_02" className={styles.fog}>
            <div className={styles.image01}></div>
            <div className={styles.image02}></div>
          </div>
          <div id="foglayer_03" className={styles.fog}>
            <div className={styles.image01}></div>
            <div className={styles.image02}></div>
          </div>
        </div>
    </section>
  );
}
