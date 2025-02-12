import { blockFormsFields } from "@/constants/blocks";
import { useState } from "react";
import Modal from "../Modal";
import DynamicForm from "../form/dynamicForm";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const titleField: FieldConfig<any> = {
  name: "title",
  label: "section Title",
  type: "text",
  inputProps: { placeholder: "Enter your Section Title" },
};

interface TabProps {
  selectedBlock: Block | null;
  setBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
  setSelectedBlock: React.Dispatch<React.SetStateAction<Block | null>>;
  forms: FormType[];
}

const blockTypes: BlockType[] = ["header", "hero"];

const BlocksTab: React.FC<TabProps> = ({
  setBlocks,
  setSelectedBlock,
  forms,
}) => {
  console.log("🚀 ~ forms:", forms);
  console.log("🚀 ~ setSelectedBlock:", !!setSelectedBlock);
  const [type, setType] = useState<BlockType | null>(null);
  const formData = type && blockFormsFields[type];
  const isContainFormId = formData?.fields.find((x) => x.name === "formId");
  const formIdField: FieldConfig<never> | undefined = isContainFormId
    ? {
        name: "formId",
        label: "Form Id",
        type: "select",
        options: forms.map((x) => ({ value: x.id, label: x.title })),
        gridProps: { xs: 12, sm: 6 },
        inputProps: { placeholder: "Form Id" },
      }
    : undefined;
  const onClose = () => setType(null);

  const onSubmit = async (data: Record<string, string>) => {
    const randomId = Math.random().toString(36).substring(2, 10);
    const { title, ...restOfData } = data;
    if (type) {
      setBlocks([{ id: randomId, title: title, type: type, data: restOfData }]);
    }
  };

  return (
    <div className="mt-4">
      {formData && (
        <Modal onClose={onClose} isOpen={!!formData}>
          <DynamicForm
            fields={[
              titleField,
              ...formData.fields.filter((x) => x.name !== "formId"),
              formIdField,
            ].filter(
              (field): field is FieldConfig<never> => field !== undefined,
            )}
            onClose={onClose}
            onSubmit={onSubmit}
            title={formData.title}
            description={formData.content}
          />
        </Modal>
      )}
      <div className="h-[calc(100vh-12rem)]">
        <div className="grid grid-cols-2 gap-2">
          {blockTypes.map((type) => {
            return (
              <button
                key={type}
                className="rounded-base text-secondary hover:text-main flex h-20 flex-col gap-2 border border-solid border-gray-100 shadow"
                onClick={() => setType(type)}
              >
                <span className="text-xs">{type}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface ToolBarProps {
  setBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
  selectedBlock: Block | null;
  setSelectedBlock: React.Dispatch<React.SetStateAction<Block | null>>;
  forms: FormType[];
}
const ToolBar: React.FC<ToolBarProps> = ({
  setBlocks,
  forms,
  selectedBlock,
  setSelectedBlock,
}) => {
  return (
    <aside className="bg-muted/30 w-80 border-l p-6">
      <div>
        <h4 className="text-xl font-semibold">Blocks</h4>
        <BlocksTab
          selectedBlock={selectedBlock}
          setBlocks={setBlocks}
          forms={forms}
          setSelectedBlock={setSelectedBlock}
        />
      </div>
    </aside>
  );
};

export default ToolBar;
