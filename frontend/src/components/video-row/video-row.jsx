import React, { useEffect, useState, useRef } from "react";
import styles from "./video-row.module.css";

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
];

export default function VideoRow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);

    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.currentTime = 0;
        video.play();
      } else {
        video.pause();
      }
    });

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className={styles.videoRowContainer}>
      {videos.map((src, index) => (
        <video
          key={index}
          ref={(el) => (videoRefs.current[index] = el)}
          src={src}
          muted
          loop={false} // importante: se quiser "sumir no final" tem que desligar loop
          onEnded={() => setActiveIndex((prev) => (prev + 1) % videos.length)}
          className={`${styles.videoElement} ${styles[`video${index + 1}`]} ${
            index === activeIndex ? styles.active : ""
          }`}
        />
      ))}
    </div>
  );
}
