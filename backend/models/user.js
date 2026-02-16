const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    employeeId: String,
    department: String
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
