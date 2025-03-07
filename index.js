import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import diceRoutes from "./src/routes/diceRoutes.js"


const app = express();
dotenv.config();

app.use(express.json());
app.use(cors(
    {
        origin: "https://67cb3fb9868ad9901f1396bc--preeminent-dusk-af3d28.netlify.app/",
        credentials: true
    }
));
app.use("/api", diceRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => { 
    console.log(`Server successfully running on the port ${PORT}`)
});
