"use client";
import { isYouTubeVideo } from "@/util/videos";
import YouTubePlayer from "./YouTubePlayer";
import { videoData } from "@/constants/videos";

const VideoGrid: React.FC = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-4 p-2 sm:grid-cols-2 md:grid-cols-3 md:px-4 lg:max-w-[1170px]">
      {videoData.map((video) => (
        <div key={video.id} className="relative aspect-video cursor-pointer">
          {isYouTubeVideo(video.videoUrl) ? (
            <div className="aspect-video overflow-hidden rounded-3xl border shadow-simple">
              <YouTubePlayer videoUrl={video.videoUrl} />
            </div>
          ) : (
            <video
              src={video.videoUrl}
              controls
              className="aspect-video rounded-3xl border shadow-simple"
              // className="absolute inset-0 w-full h-full"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
