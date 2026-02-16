const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");
const auth = require("../middleware/authMiddleware");

router.post("/checkin", auth, async (req, res) => {

    const attendance = await Attendance.create({
        userId: req.user.id,
        date: new Date().toLocaleDateString(),
        checkInTime: new Date().toLocaleTimeString(),
        status: "Present"
    });

    res.json(attendance);
});

router.post("/checkout", auth, async (req, res) => {

    const attendance = await Attendance.findOne({
        userId: req.user.id,
        date: new Date().toLocaleDateString()
    });

    attendance.checkOutTime = new Date().toLocaleTimeString();

    await attendance.save();

    res.json(attendance);
});

router.get("/my-history", auth, async (req, res) => {

    const data = await Attendance.find({
        userId: req.user.id
    });

    res.json(data);
});

module.exports = router;
