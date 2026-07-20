import { Schema, model } from "mongoose";

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: false },
  }
);

const Category = model("Category", CategorySchema);
export default Category;
