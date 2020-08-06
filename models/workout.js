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
                required: "Enter a type of workout.",
            },
            name: {
                type: String,
                trim: true,
                required: "Enter the exercise."
            },
            duration: {
                type: Number,
                required: "Enter the number of minutes you exercised.",
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