import { Schema, model } from "mongoose";

const AgriProductSchema = new Schema(
  {
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    scientific_name: {
      type: String,
      trim: true,
      maxlength: 150,
    },
    season: {
      type: String,
      maxlength: 100,
    },
    soil_type: {
      type: String,
      maxlength: 100,
    },
    fertilizer: {
      type: String,
    },
    irrigation: {
      type: String,
    },
    harvest_time: {
      type: String,
      maxlength: 100,
    },
    expected_yield: {
      type: String,
      maxlength: 100,
    },
    common_diseases: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const AgriProduct = model("AgriProduct", AgriProductSchema);
export default AgriProduct;
