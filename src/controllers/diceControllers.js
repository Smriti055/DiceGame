import { generateFairRoll } from "../utils/provablyFair.js"

let playerBalance = 1000;

export const rollDice = (req, res) => {
    const { betAmount } = req.body;

    if(!betAmount || betAmount < 0)
        return res.status(400).json({message: "Invalid bet Amount"});
    if(betAmount > playerBalance)
            return res.status(400).json({message: "Insufficient player balance"})
    
    const {roll, hash} = generateFairRoll();

    let winnings = 0;
    if(roll >= 4){
        winnings = betAmount * 2;
        playerBalance += winnings
    }
    if(roll < 4){
        playerBalance -= betAmount;
    }
    res.json ({roll, hash, playerBalance, winnings})
}