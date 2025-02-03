import { curriculumData } from "@/constants/curriculum";
import Collapsible from "./Collapsible";

const Curriculum = () => {
  return (
    <section className="container lg:max-w-[1170px] mx-auto px-2 md:px-4 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Program curriculum</h2>
      <div className="space-y-4">
        {curriculumData.map((item, index) => (
          <Collapsible key={index} title={item.title}>
            <p className="text-muted-foreground">{item.content}</p>
          </Collapsible>
        ))}
      </div>
    </section>
  );
};

export default Curriculum;
