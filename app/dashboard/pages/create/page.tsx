"use client";

import { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { ViewModeSelector } from "@/components/pages/ViewModeSelector";
import { DraggableBlock } from "@/components/pages/DraggableBlock";
import ToolBar from "@/components/pages/toolbar";
import { formFields } from "@/constants/form";

type ViewMode = "desktop" | "tablet" | "mobile";
const getViewModeWidth = (viewMode: ViewMode) => {
  switch (viewMode) {
    case "desktop":
      return "max-w-[1200px]";
    case "tablet":
      return "max-w-[768px]";
    case "mobile":
      return "max-w-[375px]";
  }
};

export default function PageBuilder({ page }: { page?: PageType }) {
  // State management
  const [blocks, setBlocks] = useState<Block[]>(page?.blocks || []);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [forms, setForms] = useState<FormType[]>(
    page?.forms || [
      {
        id: "2",
        title: "Application Form mailer ",
        content: "Don't miss the offer",
        successMessage: "Thank you for submitting our form ",
        submitButtonText: "Submit Now",
        fields: formFields,
        submitTo: "mailerLite",
        mailerID: "any", // the id of mailer lite > string | null
        googleSheetAPI: "", // the api of google sheets string | null
        groups: [], // the ids of the groups string[]
        afterSubmitRedirect: "/jobs",
      },
    ],
  );
  const [selectedBlock, setSelectedBlock] = useState<Block | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("desktop");

  // Block manipulation functions
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(blocks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setBlocks(items);
  };

  return (
    <div className="bg-background flex w-full">
      <main className="scroll-bar-minimal w-full flex-1 overflow-auto p-6">
        {/* Header Section */}
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Post Your Blog Now</h1>
          <ViewModeSelector
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        </div>

        {/* Content Area */}
        <div
          className={`mx-auto rounded-lg border bg-white p-8 shadow-sm transition-all ${getViewModeWidth(viewMode)}`}
        >
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="blocks">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="min-h-[500px]"
                >
                  <div className="grid grid-cols-1 gap-2">
                    {blocks.map((block, index) => (
                      <DraggableBlock
                        forms={forms}
                        key={block.id}
                        block={block}
                        index={index}
                        isSelected={selectedBlock?.id === block.id}
                        onSelect={setSelectedBlock}
                        setBlocks={setBlocks}
                      />
                    ))}
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </main>

      {/* Toolbars and Menus */}
      <ToolBar
        forms={forms}
        setBlocks={setBlocks}
        selectedBlock={selectedBlock}
        setSelectedBlock={setSelectedBlock}
      />
    </div>
  );
}
