import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import destinationRouter from "./routes/destination_routes.js";
import voyageurRouter from "./routes/voyageur_routes.js";
import reservationRouter from "./routes/reservation_routes.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/destinations", destinationRouter);
app.use("/api/voyageurs", voyageurRouter);
app.use("/api/reservations", reservationRouter);

app.get("/", (req, res) => {
  res.send("<h1>La Page Home</h1>");
});

mongoose
  .connect(process.env.DB_URL)
  .then((result) => {
    app.listen(process.env.PORT, () => console.log("server running"));
  })
  .catch((err) => {
    console.error(err);
  });
