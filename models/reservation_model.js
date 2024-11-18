import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  destinationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destination",
    required: true,
  },
  voyageurId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Voyageur",
    required: true,
  },
  dateDebut: {
    type: Date,
    required: true,
  },
  dateFin: {
    type: Date,
    required: true,
  },
  nombrePersonnes: {
    type: Number,
    required: true,
  },
  prixTotal: {
    type: Number,
    required: true,
  },
});

const ReservationModel = mongoose.model("Reservation", reservationSchema);

export default ReservationModel;
