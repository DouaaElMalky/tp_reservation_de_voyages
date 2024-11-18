import express from "express";
import * as VoyageurController from "../controllers/voyaguer_controller.js";
const router = express.Router();

router
  .route("/")
  .get(VoyageurController.getAllVoyageurs)
  .post(VoyageurController.addVoyageur);
router
  .route("/:id")
  .get(VoyageurController.getVoyageurById)
  .put(VoyageurController.updateVoyageur)
  .delete(VoyageurController.deleteVoyageur);

export default router;
