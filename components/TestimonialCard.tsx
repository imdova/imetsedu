import { TestimonialType } from "@/constants/testimonials";
import Image from "next/image";

export const TestimonialCard: React.FC<TestimonialType> = ({
  content,
  name,
  role,
  media, // Renamed from images to media to include both images & videos
}) => {
  return (
    <div className="flex flex-col items-center max-w-[800px] mx-auto">
      {/* User Info */}
      <div className="flex items-center space-x-4 mb-4">
        <div>
          <h3 className="font-semibold text-sm md:text-base">{name}</h3>
          <p className="text-xs md:text-sm text-gray-600">{role}</p>
        </div>
      </div>

      {/* Testimonial Content */}
      <p className="text-gray-600 text-xs w-4/5 text-center">{content}</p>

      {/* Media Section */}
      <div className="flex gap-2 flex-wrap justify-center mt-4">
        {media?.map((file, index) =>
          file.endsWith(".mp4") ? (
            <video
              key={index}
              src={file}
              controls
              className="w-full max-w-[200px] h-auto aspect-video rounded-lg object-cover"
            />
          ) : (
            <Image
              key={index}
              src={file}
              alt={`${name} media ${index}`}
              width={80}
              height={80}
              className="w-full h-auto rounded-lg object-cover"
            />
          )
        )}
      </div>
    </div>
  );
};
