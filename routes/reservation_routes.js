import express from "express";
import * as ReservationController from "../controllers/reservation_controller.js";

const router = express.Router();

router
  .route("/")
  .get(ReservationController.getAllReservations)
  .post(ReservationController.addReservation);
router
  .route("/:id")
  .get(ReservationController.getReservationById)
  .put(ReservationController.updateReservation)
  .delete(ReservationController.deleteReservation);

export default router;
