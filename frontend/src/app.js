import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {

    const token = localStorage.getItem("token");

    return (
        <div>
            {token ? <Dashboard /> : <Login />}
        </div>
    );
}

export default App;
