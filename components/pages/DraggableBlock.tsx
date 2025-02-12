import { Draggable } from "@hello-pangea/dnd";
import { Grip } from "lucide-react";
import Header from "../Header";
import StickyCTA from "../StickyCTA";
import Hero from "../hero";
import Features from "../Features";
import Curriculum from "../Curriculum";
import InstructorCard from "../instructorCard";
import Testimonials from "../Testimonials";
import VideoGrid from "../VideoGrid";
import AboutSection from "../AboutSection";
import Programs from "../programs";

interface DraggableBlockProps {
  block: Block;
  forms: FormType[];
  index: number;
  isSelected: boolean;
  onSelect: (block: Block) => void;
  setBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
}

export function DraggableBlock({
  block,
  forms,
  index,
  isSelected,
  onSelect,
}: DraggableBlockProps) {
  const renderComponent = (
    block: Block,
    forms: FormType[],
  ): React.ReactNode => {
    switch (block.type) {
      case "header":
        return <Header key={block.id} {...block} forms={forms} />;
      case "stickyCTA":
        return <StickyCTA key={block.id} {...block} forms={forms} />;
      case "hero":
        return <Hero key={block.id} {...block} />;
      case "features":
        return <Features key={block.id} {...block} />;
      case "curriculum":
        return <Curriculum key={block.id} {...block} />;
      case "instructor":
        return <InstructorCard key={block.id} {...block} />;
      case "testimonials":
        return <Testimonials key={block.id} {...block} />;
      case "VideoGrid":
        return <VideoGrid key={block.id} {...block} />;
      case "about":
        return <AboutSection key={block.id} {...block} />;
      case "program":
        return <Programs key={block.id} {...block} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Draggable draggableId={block.id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            onClick={() => onSelect(block)}
            className={`rounded-base group relative border p-4 pb-0 ${
              isSelected
                ? "border-primary"
                : "border-transparent hover:border-neutral-400"
            }`}
          >
            <button
              {...provided.dragHandleProps}
              className="rounded-base invisible absolute -right-3 -top-3 z-[80] rounded-xl bg-black p-1 group-hover:visible"
              tabIndex={-1}
            >
              <Grip className="h-5 w-5 cursor-move text-white" />
            </button>

            {renderComponent(block, forms)}
          </div>
        )}
      </Draggable>
    </div>
  );
}
