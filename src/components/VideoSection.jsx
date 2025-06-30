import React from 'react';

const VideoSection = () => {
  return (
    <section className="h-screen">
      <video 
        autoPlay 
        loop 
        muted 
        className="w-full h-full object-cover"
      >
        <source src="/video_sao_pedro.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </section>
  );
};

export default VideoSection; 