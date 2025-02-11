import mongoose from "mongoose";

const BlockSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true }, // Example types: 'text', 'image', 'video', 'html', etc.
  data: { type: mongoose.Schema.Types.Mixed, required: true }, // Can store any kind of data
});

const userSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  blocks: [BlockSchema],
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
