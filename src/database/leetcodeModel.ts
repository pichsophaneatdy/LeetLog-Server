import mongoose from "mongoose";

const LeetcodeSchema = new mongoose.Schema({
        code: Number,
        question: String,
        date: Number,
        duration: Number,
        difficulty: String,
        solution: String
})

export default mongoose.model("Leetcode", LeetcodeSchema);