const router = require("express").Router();
const Workout = require("../modules/workout");

router.post("/workouts", ({ body }, res) => {
    Workout.create(body)
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

router.get("/workouts", (req, res) => {
    Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catc((err) => {
        res.json(err);
    });
});

//delete
router.delete("/workouts", ({ body }, res) => {
    Workout.findOneAndDelete(body.id)
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

//update
router.put("/workouts/:id", ({ body, params }, res) => {
    const workoutId = params.id;
    Workout.findByIdAndUpdate(
        workoutId,
        {
            $push: {
                exercises: body,
            },
        },
        {
            new: true,
            runValidators: true,
        }
    )
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

//7days
router.get("/workouts/range", (req, res) => {
    Workout.find({})
        .limit(7)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;