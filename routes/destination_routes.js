import express from "express";
import * as DestinationController from "../controllers/destination_controller.js";

const router = express.Router();

router
  .route("/")
  .get(DestinationController.getAllDestinations)
  .post(DestinationController.addDestination);
router
  .route("/:id")
  .get(DestinationController.getDestinationById)
  .put(DestinationController.updateDestination)
  .delete(DestinationController.deleteDestination);

export default router;
