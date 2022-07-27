import React, { Component } from "react";
import { Route, Redirect } from "react-router";
import { getSession } from "../helper/helper";

const checkAuth = () => {
  return !getSession() ? false : true;
};

export default class PrivateRoute extends React.Component {
  //_isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
    };
  }

  componentWillMount() {
    //this._isMounted = true;
    this.setState({
      auth: checkAuth() && !this.state.auth,
    });
  }

  render() {
    const { Component: component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          this.state.auth ? (
            <Component {...props} />
          ) : (
            <Redirect to = {{ pathname: '/login', state: 
            { from: this.props.location }}}
            />
          );
        }}
      />
    );
  }
}
