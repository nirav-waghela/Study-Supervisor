import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => (
                localStorage.hasOwnProperty('token') ? (                    
                    <div>
                        <Component {...props} />
                    </div>
                ) : (
                        <Redirect to='/login' />
                    )
            )}
        />
    );
}

export default PrivateRoute;
