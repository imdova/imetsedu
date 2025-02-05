import { TestimonialType } from "@/constants/testimonials";
import Image from "next/image";
import Avatar from "./avatar";

export const TestimonialCard: React.FC<TestimonialType> = ({
  content,
  name,
  role,
  userPhoto,
  media, // Renamed from images to media to include both images & videos
}) => {
  return (
    <div className="mx-2 flex h-full w-full max-w-[800px] flex-col items-center justify-center rounded-3xl border-gray-100 bg-white p-2 shadow-simple md:mx-auto md:p-4">
      {/* User Info */}
      <div className="mb-4 flex w-full items-center justify-start space-x-4">
        <Avatar
          src={userPhoto || "/placeholder-avatar.svg"}
          alt={name}
          width={50}
          height={50}
          className="aspect-square h-auto w-[50px] rounded-full bg-primary object-cover"
        />
        <div>
          <h3 className="text-sm font-semibold md:text-base">{name}</h3>
          <p className="text-xs text-gray-600 md:text-sm">{role}</p>
        </div>
      </div>

      {/* Testimonial Content */}
      {content && (
        <p className="w-4/5 text-center text-xs text-gray-600">{content}</p>
      )}

      {/* Media Section */}
      {media && media.length > 0 && (
        <div className="flex w-full flex-wrap justify-center gap-2">
          {media?.map((file, index) =>
            file.endsWith(".mp4") ? (
              <video
                key={index}
                src={file}
                controls
                className="aspect-video h-auto w-full max-w-[200px] rounded-lg object-cover"
              />
            ) : (
              <Image
                key={index}
                src={file}
                alt={`${name} media ${index}`}
                width={200}
                height={200}
                className="h-auto max-h-40 w-full max-w-[400px] rounded-2xl object-cover"
              />
            ),
          )}
        </div>
      )}
    </div>
  );
};
