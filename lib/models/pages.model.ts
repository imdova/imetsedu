import mongoose from "mongoose";

const BlockSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String },
    type: { type: String, required: true },
    data: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  { _id: false },
);

const FormSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String },
    successMessage: { type: String },
    submitButtonText: { type: String },
    fields: { type: mongoose.Schema.Types.Mixed, required: true },
    submitTo: { type: String, required: true },
    mailerID: { type: String, default: null },
    googleSheetAPI: { type: String, default: null },
    groups: { type: [String], default: [] },
    afterSubmitRedirect: { type: String },
  },
  { _id: false },
);

const PageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true },
    blocks: [BlockSchema],
    forms: [FormSchema],
  },
  {
    timestamps: true,
    toJSON: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transform: function (doc, ret: any) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v; // Optionally remove the __v field if it exists
      },
    },
  },
);

export const Page = mongoose.models.Page || mongoose.model("Page", PageSchema);
