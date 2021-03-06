import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) => {
                return currentUser !== null && currentUser.emailVerified ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                );
            }}
        ></Route>
    );
}

export default ProtectedRoute;
