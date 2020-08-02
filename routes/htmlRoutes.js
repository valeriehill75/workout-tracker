const router = require("express").Router();
const path = require("path");

router.get("/exercise", (_, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (_, res) => {
    res.sendFile(path.join(__dirname, "..public/stats.html"));
});

router.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "..public/index.html"));
});

module.exports = router;