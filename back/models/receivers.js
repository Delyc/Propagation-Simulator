import mongoose from "mongoose";

const ReceiverSchema = new mongoose.Schema(
  {
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    radius: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

ReceiverSchema.index({ location: "2dsphere" }, { unique: true });

export const Receivers = mongoose.model("receivers", ReceiverSchema);
