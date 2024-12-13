import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    if (!isAuthenticated) {
        return <p>Please sign in to view the dashboard.</p>;
    }

    return <div>Welcome to your dashboard!</div>;
};

export default Dashboard;
