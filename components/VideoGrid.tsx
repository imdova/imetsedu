import { isYouTubeVideo } from "@/util/videos";
import YouTubePlayer from "./YouTubePlayer";
import { VideType } from "@/constants/videos";

interface VideoGridProps {
  videos: VideType[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div
      className={`grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-4`}
    >
      {videos.map((video) => (
        <div key={video.id} className="relative aspect-video cursor-pointer">
          {isYouTubeVideo(video.videoUrl) ? (
            <YouTubePlayer videoUrl={video.videoUrl} />
          ) : (
            <video
              src={video.videoUrl}
              controls
              className="aspect-video border rounded-3xl shadow-md"
              // className="absolute inset-0 w-full h-full"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
