import { curriculumData, curriculumSection } from "@/constants/curriculum";
import Collapsible from "./Collapsible";
import WaveDiv from "./wavediv";

const Curriculum = () => {
  return (
    <WaveDiv className="mb-4 fill-primary">
      <section className="w-full bg-primary p-4">
        <div className="container mx-auto px-2 md:px-4 lg:max-w-[1170px]">
          <h2 className="mb-6 text-center text-2xl font-bold text-gold md:text-left">
            {curriculumSection.title}
          </h2>
          <div className="space-y-4">
            {curriculumData.map((item, index) => (
              <Collapsible key={index} title={item.title}>
                <p className="text-muted-foreground">{item.content}</p>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>
    </WaveDiv>
  );
};

export default Curriculum;
