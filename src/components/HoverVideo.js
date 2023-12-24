import React, { useState, useRef } from "react";

const HoverVideo = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!videoRef.current.paused) return;
    setIsHovered(true);
    videoRef.current.playbackRate = 0.6;
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current.paused) return;
    setIsHovered(false);
    videoRef.current.pause();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer", position: "relative" }}
      className="img"
    >
      <video
        ref={videoRef}
        height="300"
        muted
        style={{
          filter: isHovered ? "brightness(95%)" : "none",
          width: "100%"
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HoverVideo;
