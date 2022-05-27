import express from "express";
const receiverRouter = express.Router()

import {createReceiver, deleteReceiver, getReceivers} from '../controllers/receivers.js'
receiverRouter.post("/", createReceiver)
receiverRouter.get("/", getReceivers)
receiverRouter.delete("/:id", deleteReceiver)

export default receiverRouter