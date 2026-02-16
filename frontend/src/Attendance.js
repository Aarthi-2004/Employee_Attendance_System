import React from "react";
import axios from "axios";

function Attendance() {

    const token = localStorage.getItem("token");

    const checkIn = async () => {

        await axios.post(
            "http://localhost:5000/api/attendance/checkin",
            {},
            {
                headers: { authorization: token }
            }
        );

        alert("Checked In");
    };

    const checkOut = async () => {

        await axios.post(
            "http://localhost:5000/api/attendance/checkout",
            {},
            {
                headers: { authorization: token }
            }
        );

        alert("Checked Out");
    };

    return (
        <div>

            <button onClick={checkIn}>
                Check In
            </button>

            <button onClick={checkOut}>
                Check Out
            </button>

        </div>
    );
}

export default Attendance;
