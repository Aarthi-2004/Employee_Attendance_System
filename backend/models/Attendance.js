const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    date: String,
    checkInTime: String,
    checkOutTime: String,
    status: String,
    totalHours: String
}, { timestamps: true });

module.exports = mongoose.model("Attendance", attendanceSchema);
