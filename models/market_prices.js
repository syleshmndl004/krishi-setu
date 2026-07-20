import { Schema, model } from "mongoose";

const MarketPriceSchema = new Schema(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "AgriProduct",
      required: true,
    },
    market_name: {
      type: String,
      maxlength: 150,
    },
    district: {
      type: String,
      maxlength: 100,
    },
    variety: {
      type: String,
      maxlength: 100,
    },
    grade: {
      type: String,
      maxlength: 50,
    },
    unit: {
      type: String,
      maxlength: 20,
    },
    minimum_price: {
      type: Number,
    },
    maximum_price: {
      type: Number,
    },
    average_price: {
      type: Number,
    },
    source: {
      type: String,
      default: "Kalimati API",
    },
    fetched_at: {
      type: Date,
    },
  }
);

const MarketPrice = model("MarketPrice", MarketPriceSchema);
export default MarketPrice;
