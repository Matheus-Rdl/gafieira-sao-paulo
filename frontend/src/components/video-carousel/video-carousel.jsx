import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./video-carousel.module.css";

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
];

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      const duration = video.duration;
      // Calcula velocidade necessária para caber em 8s
      const rate = duration / 5;
      video.currentTime = 0;
      video.playbackRate = rate > 0 ? rate : 1;
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 10000);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      clearTimeout(timer);
    };
  }, [currentIndex]);

  return (
    <div className={styles.videoCarouselContainer}>
      <div className={styles.videoWrapper}>
        <AnimatePresence mode="wait">
          <motion.video
            key={videos[currentIndex]}
            ref={videoRef}
            src={videos[currentIndex]}
            autoPlay
            muted
            className={styles.videoElement}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
