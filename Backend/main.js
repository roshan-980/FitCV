import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mainRouter from "./routes/ats_score.js";
dotenv.config();
const app = express();
const PORT = 5000;
app.use(cors());
app.use("/api/ats_score", mainRouter);
app.get("/", (req, res) => {
    res.json({ message: "Server is running 🚀" });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});