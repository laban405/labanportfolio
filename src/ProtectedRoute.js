import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";
import PropTypes from 'prop-types';

const ProtectedRoute = (props) => {
   const {layout: Layout,
        component: Component,
        ...rest
      }=props;


  return (
    <Route
      {...rest}
      render={matchProps => {
        if (auth.isAuthenticated()) {
          return <Layout><Component {...matchProps} /></Layout>;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/sign-in",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

ProtectedRoute.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string
  };
  
export default ProtectedRoute;
