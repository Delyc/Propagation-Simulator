import mongoose from "mongoose";
import { Receivers } from "../models/receivers.js";
const Mongoose = mongoose;

export const createReceiver = async (req, res) => {
  try {
    const loc = {
      type: "Point",
      coordinates: [
        parseFloat(req.body.longitude),
        parseFloat(req.body.latitude),
      ],
    };
    const receiver = await Receivers.create({
      location: loc,
      radius: req.body.radius,
    });

    return res.status(201).json({
      success: true,
      data: { message: "receiver created successfully", location: receiver },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: {
        message: error.message,
      },
    });
  }
};

export const getReceivers = async (req, res) => {
  const receivers = await Receivers.find({});
  return res.status(200).json({
    success: true,
    data: receivers,
  });
};

export const deleteReceiver = async (req, res) => {
  const id = req.params.id;
  const receiver = await Receivers.findById(id);

  if (!receiver) {
    return res.status(400).json({
      success: false,
      data: {
        message: "No receiver found",
      },
    });
  }

  await Receivers.findByIdAndDelete(id);
  return res.status(200).json({
    success: true,
    data: {
      message: "receiver deleted successfully",
    },
  });
};
