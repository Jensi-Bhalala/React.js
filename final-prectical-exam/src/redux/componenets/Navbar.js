import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../actions/authActions";

const Navbar = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    return (
        <nav>
            <h1>React Auth</h1>
            {isAuthenticated ? (
                <div>
                    <span>Welcome, {user.email}!</span>
                    <button onClick={() => dispatch(signOut())}>Sign Out</button>
                </div>
            ) : (
                <span>Please Sign In</span>
            )}
        </nav>
    );
};

export default Navbar;
