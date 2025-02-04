import React from "react";

interface YouTubePlayerProps {
  videoUrl: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoUrl }) => {
  const videoId = new URL(videoUrl).searchParams.get("v");
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <React.Fragment>
      {embedUrl ? (
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title="YouTube video player"
          allow="accelerometer; "
          allowFullScreen
        />
      ) : (
        <div className="flex justify-center items-center h-full">
          <span>Loading...</span>
        </div>
      )}
    </React.Fragment>
  );
};

export default YouTubePlayer;
