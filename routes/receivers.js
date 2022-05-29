import express from "express";
const receiverRouter = express.Router()

import {createReceiver, deleteReceiver, getReceivers} from '../controllers/receivers.js'
/**
 * @openapi
 * tags:
 *  name: RECEIVERS
 */



/**
 * @openapi
 * components:
 *  schemas:
 *    addingReceiver:
 *      type: object
 *      required:
 *        -title
 *        
 *      example:
 *        latitude: 30.256931302815797
 *        longitude: -1.1809952994200699
 *        Radius: 6
 *       
 *      properties:
 *        latitude:
 *          type: Number
 *          description: add latitude of an area
 *        longitude:
 *          type: Number
 *          description: add longitude of an area
 *        radius:
 *           type: Number   
 *           description: add radius of an area
 * 
 */


/**
 * @openapi
 * /api/receivers:
 *  post:
 *    
 *    summary: Allow a user to add a receiver
 *    
 *    description: add a Receiver
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/addingReceiver"
 *    
 *    responses:
 *      200:
 *        description: Receiver added successfully!
 *
 */


receiverRouter.post("/", createReceiver)


/**
 * @openapi
 * /api/receivers:
 *  get:
 *    summary: Get a list of all receivers
 *  
 *    responses:
 *      200:
 *        description: A list of all receivers.
 */
receiverRouter.get("/", getReceivers)
/**
 * @openapi
 * /api/receivers/{id}:
 *  delete:
 *    summary: delete Receiver
 *    description: delete a reciever associated with provided id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description:  a valid receiver id is required
 *    responses:
 *      200:
 *        description: Receiver deleted
 */
receiverRouter.delete("/:id", deleteReceiver)

export default receiverRouter