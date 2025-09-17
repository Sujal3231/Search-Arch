'use client';

export default function Videos() {
  const videos = [
    {
      id: 1,
      
      videoUrl: 'https://infoglans.com/search/wp-content/uploads/2025/05/Kandima-Signature-Video-20-seconds.mp4',
    },
  ];

  return (
    <section id="Videos" className="scroll-section mb-5">
      <h3 className="title-news">Videos</h3>
      <div className="row">
        {videos.map((video) => (
          <div key={video.id} className="col-12 mb-4">
            <div className="ratio ratio-16x9">
              <video
                controls
                style={{ width: '100%', height: '100%' }}
              >
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
