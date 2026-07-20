import { Schema, model } from "mongoose";

const NoticeSchema = new Schema(
  {
    admin_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },
    description: {
      type: String,
    },
    notice_type: {
      type: String,
      enum: ["tip", "alert", "news"],
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: false },
  }
);

const Notice = model("Notice", NoticeSchema);
export default Notice;
