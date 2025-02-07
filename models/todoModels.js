import mongoose, { Schema } from "mongoose";
const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export const Todo = mongoose.model("Todo", todoSchema)