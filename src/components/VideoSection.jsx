import React from 'react';

const VideoSection = () => {
  return (
    <section className="w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto"
      >
        <source src="/video_sao_pedro.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </section>
  );
};

export default VideoSection;
