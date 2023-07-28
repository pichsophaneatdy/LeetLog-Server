import mongoose from "mongoose";

const LeetcodeSchema = new mongoose.Schema({
        uid: {
                type: String, 
                require: true
        },
        code: Number,
        question: String,
        date: Number,
        duration: Number,
        difficulty: String,
        solution: String
})

export default mongoose.model("Leetcode", LeetcodeSchema);