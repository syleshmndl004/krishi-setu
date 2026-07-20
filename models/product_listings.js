import { Schema, model } from "mongoose";

const ReviewSchema = new Schema(
  {
    reviewer_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: false },
  }
);

const ProductListingSchema = new Schema(
  {
    seller_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "AgriProduct",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      enum: ["kg", "ton", "dozen", "piece", "crate"],
    },
    asking_price: {
      type: Number,
      required: true,
    },
    district: {
      type: String,
      maxlength: 100,
    },
    municipality: {
      type: String,
      maxlength: 100,
    },
    contact_number: {
      type: String,
      maxlength: 20,
    },
    description: {
      type: String,
    },
    images: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "approved", "rejected", "sold"],
    },
    reviews: [ReviewSchema],
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const ProductListing = model("ProductListing", ProductListingSchema);
export default ProductListing;
