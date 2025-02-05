import { instructor } from "@/constants/instructor";
import Avatar from "./avatar";

export const InstructorCard: React.FC = () => {
  return (
    <section className="container mx-auto mb-6 p-2 md:p-4 lg:max-w-[1170px]">
      <h2 className="mb-4 text-center text-2xl font-bold md:text-left">
        {instructor.sectionTitle}
      </h2>
      <div className="flex max-w-[500px] flex-col items-start rounded-3xl border-2 border-dashed border-gold bg-white p-4 shadow-md md:mx-auto">
        <div className="mb-4 flex items-center space-x-4">
          <Avatar
            src={instructor.image}
            alt={instructor.name}
            width={80}
            height={80}
            className="aspect-square max-h-[50px] w-[50px] rounded-full bg-primary object-cover text-gold md:max-h-[80px] md:w-[80px]"
          />
          <div>
            <h3 className="text-sm font-semibold md:text-base">
              {instructor.name}
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm">
              {instructor.title}
            </p>
          </div>
        </div>
        <p className="text-center text-xs text-gray-600">
          {instructor.content}
        </p>
      </div>
    </section>
  );
};
