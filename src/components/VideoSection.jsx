import React from 'react';

const VideoSection = () => {
  return (
    <section className="h-screen w-full overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full h-full object-cover md:object-cover object-center"
        style={{
          minWidth: '100%',
          minHeight: '100%'
        }}
      >
        <source src="/video_sao_pedro.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </section>
  );
};

export default VideoSection;