import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Navbar />
                <Auth />
                <Dashboard />
            </div>
        </Provider>
    );
};

export default App;
