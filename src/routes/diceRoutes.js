import express from "express";

import { rollDice } from "../controllers/diceControllers.js"; //rollDice handles roll dice logic

const router = express.Router();


router.post("/roll-dice", rollDice); //this endpoint will trigger rollDice function


export default router;