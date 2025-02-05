"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface YouTubePlayerProps {
  videoUrl: string;
  priority?: boolean;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoUrl,
  priority,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract video ID more robustly
  const videoId = React.useMemo(() => {
    try {
      const url = new URL(videoUrl);
      return (
        url.searchParams.get("v") ||
        url.pathname.replace("/embed/", "").replace("/watch?v=", "")
      );
    } catch {
      return null;
    }
  }, [videoUrl]);

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  if (!videoId) {
    return <div>Invalid YouTube URL</div>;
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      {!isPlaying ? (
        <div
          className="group absolute inset-0 cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <Image
            src={thumbnailUrl}
            alt={"youtube video"}
            width={450}
            height={450}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 transition-all group-hover:bg-opacity-30">
            <Play
              size={64}
              color="white"
              className="opacity-80 transition-opacity group-hover:opacity-100"
            />
          </div>
        </div>
      ) : (
        <iframe
          src={`${embedUrl}?autoplay=1&modestbranding=1&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute left-0 top-0 h-full w-full"
        />
      )}
    </div>
  );
};

export default YouTubePlayer;
