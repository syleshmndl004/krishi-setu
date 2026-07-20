import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    full_name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      maxlength: 150,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 20,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["farmer", "buyer", "admin"],
    },
    district: {
      type: String,
      maxlength: 100,
    },
    municipality: {
      type: String,
      maxlength: 100,
    },
    address: {
      type: String,
    },
    profile_image: {
      type: String,
    },
    is_verified: {
      type: Boolean,
      default: false,
    },
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "ProductListing",
      },
    ],
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const User = model("User", UserSchema);
export default User;
