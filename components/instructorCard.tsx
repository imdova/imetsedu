import { instructor } from "@/constants/instructor";
import Image from "next/image";

export const InstructorCard: React.FC = () => {
  return (
    <div className="flex flex-col items-start p-4 max-w-[500px] md:mx-auto bg-white  border-gold border-dashed border-2 shadow-md rounded-xl m-4 mb-4">
      <div className="flex items-center space-x-4 mb-4">
        <Image
          src={instructor.image}
          alt={instructor.name}
          width={80}
          height={80}
          className="w-[50px] md:w-[80px] rounded-full aspect-square object-cover"
        />
        <div>
          <h3 className="font-semibold text-sm md:text-base">
            {instructor.name}
          </h3>
          <p className="ms:text-sm text-gray-600 text-xs ">{instructor.name}</p>
        </div>
      </div>
      <p className="text-gray-600 text-xs text-center">{instructor.content}</p>
    </div>
  );
};
