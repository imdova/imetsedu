import { TestimonialType } from "@/constants/testimonials";
import Image from "next/image";

export const TestimonialCard: React.FC<TestimonialType> = ({
  content,
  name,
  role,
  userPhoto,
  media, // Renamed from images to media to include both images & videos
}) => {
  return (
    <div className="p-2 md:p-4 h-full w-full flex flex-col justify-center items-center max-w-[800px] md:mx-auto bg-white shadow-md rounded-3xl border-gray-100 mx-4 ">
      {/* User Info */}
      <div className="flex justify-start w-full items-center space-x-4 mb-4">
        <Image
          src={userPhoto || "/placeholder-avatar.svg"}
          alt={name}
          width={50}
          height={50}
          className="w-[50px] rounded-full h-auto aspect-square object-cover"
        />
        <div>
          <h3 className="font-semibold text-sm md:text-base">{name}</h3>
          <p className="text-xs md:text-sm text-gray-600">{role}</p>
        </div>
      </div>

      {/* Testimonial Content */}
      {content && (
        <p className="text-gray-600 text-xs w-4/5 text-center">{content}</p>
      )}

      {/* Media Section */}
      {media && media.length > 0 && (
        <div className="flex gap-2 w-full flex-wrap justify-center ">
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
                width={200}
                height={200}
                className="w-full max-h-40 max-w-[400px] h-auto rounded-2xl object-cover"
              />
            )
          )}
        </div>
      )}
    </div>
  );
};
