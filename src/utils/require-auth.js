/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Redirect } from "react-router-dom";
import { config } from "../config";
import axios from "axios";
import { connect } from "react-redux";
import { loadUserInfo } from "../actions/user/userActions";

export default function (ChildComponent, withAuth = false, isAdmin = false) {
  class RequireAuth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        redirect: false,
        redirectNoAdmin: false,
      };
    }

    componentDidMount = async () => {
      const token = window.localStorage.getItem("AmalaToken");

      if (token === null && withAuth) {
        this.setState({ redirect: true });
      } else {
        if (
          this.props.user.isLogged === null ||
          this.props.user.isLogged === false
        ) {
          axios
            .get(config.api_url + "api/v1/checkToken", {
              headers: { "x-access-token": token },
            })
            .then((response) => {
              if (response.data.status !== 200) {
                this.setState({ redirect: true });
              } else {
                this.props.loadUserInfo(true, response.data.user);
              }
            });
        } else if (
          this.props.user &&
          this.props.user.role !== "admin" &&
          isAdmin
        ) {
          this.setState({ redirectNoAdmin: true });
        }
      }
    };

    render() {
      if (this.state.redirect && withAuth) {
        return <Redirect to="/login" />;
      }
      if (this.state.redirectNoAdmin && withAuth) {
        return <Redirect to="/non-authorize" />;
      }
      return <ChildComponent {...this.props} />;
    }
  }

  const mapDispatchToProps = {
    loadUserInfo,
  };

  const mapStateToProps = (store) => {
    return {
      user: store.user,
      theme: store.theme,
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(RequireAuth);
}
