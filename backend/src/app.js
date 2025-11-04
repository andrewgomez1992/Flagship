import express from "express";
import dotenv from "dotenv";
import flagsRouter from "./routes/flags.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/flags", flagsRouter);

app.get("/", (req, res) => res.send("Flagship API is running"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

export default app;
