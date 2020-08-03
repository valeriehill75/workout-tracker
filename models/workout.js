//Requirement
const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;

//Instance of Schema
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "What type of workout?",
            },
            name: {
                type: String,
                trim: true,
                required: "What exercise are did you do?"
            },
            duration: {
                type: Number,
                required: "How long did you exercise?",
            },
            weight: {
                type: Number,
            },
            distance: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
        },
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;