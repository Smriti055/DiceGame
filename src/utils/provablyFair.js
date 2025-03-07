import crypto from "crypto";

export const generateFairRoll = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    const hash = crypto.createHash("sha256").update(roll.toString()).digest("hex"); 
    return {roll, hash};
}