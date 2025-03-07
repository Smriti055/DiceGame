import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import diceRoutes from "./src/routes/diceRoutes.js"


const app = express();
dotenv.config();

app.use(express.json());
app.use(cors(
    {
        origin: "https://roaring-buttercream-4a5966.netlify.app",
        credentials: true
    }
));
app.use("/api", diceRoutes);
app.get("/", (req, res) => {
    res.send("Backend is running!");
  });
  

const PORT = process.env.PORT;

app.listen(PORT, () => { 
    console.log(`Server successfully running on the port ${PORT}`)
});
