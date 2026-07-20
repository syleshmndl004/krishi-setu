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

      validate: {
        validator: (email) => { //it will check if the email is valid or not using a regular expression. The regular expression checks for a valid email format, and the test method returns true if the email is valid and false otherwise.
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },
        message: "Invalid email address",
      },
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

UserSchema.pre("findOneAndUpdate", async function () {
  const updatedData = this.getUpdate();
  if (updatedData.password) {
    updatedData.password = await hash(updatedData.password, 10);
  }
});

const User = model("User", UserSchema);
export default User;
