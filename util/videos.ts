export function isLocalVideo(videoUrl: string): boolean {
  // Check for common local file extensions (case-insensitive)
  const localExtensions = /\.(mp4|mov|avi|mkv|webm|ogg)$/i;

  // Check if the URL starts with a known local path indicator or doesn't contain a domain
  const localPathRegex = /^\/|^\.\/|^\.\.\/|^\w+\//; // starts with /, ./, ../, or a word followed by /
  const noDomainRegex = /^(?!(?:https?:\/\/)?(?:www\.)?[\w.-]+\.[\w]{2,}\))/; // doesn't contain a domain

  return (
    localExtensions.test(videoUrl) ||
    localPathRegex.test(videoUrl) ||
    noDomainRegex.test(videoUrl)
  );
}

export function isYouTubeVideo(videoUrl: string): boolean {
  // A more robust check for YouTube URLs.  Handles various formats.
  const youtubeRegex =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/?\/)?(?:v\/|watch\?v=|embed\/|shorts\/)?|youtu\.be\/)([\w-]{11})(?:\S+)?$/;

  return youtubeRegex.test(videoUrl);
}

export function getVideoType(
  videoUrl: string
): "youtube" | "local" | "unknown" {
  if (isYouTubeVideo(videoUrl)) {
    return "youtube";
  } else if (isLocalVideo(videoUrl)) {
    return "local";
  } else {
    return "unknown"; // Or handle the unknown case as needed
  }
}
