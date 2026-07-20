import { Schema, model } from "mongoose";

const WeatherCacheSchema = new Schema(
  {
    district: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 100,
    },
    temperature: {
      type: Number,
    },
    humidity: {
      type: Number,
    },
    wind_speed: {
      type: Number,
    },
    rain_chance: {
      type: Number,
    },
    weather_condition: {
      type: String,
      maxlength: 100,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  }
);

// Add a pre-save hook to automatically update updated_at timestamp when saving
WeatherCacheSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const WeatherCache = model("WeatherCache", WeatherCacheSchema);
export default WeatherCache;
