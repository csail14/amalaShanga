/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Redirect } from "react-router-dom";
import { config } from "../config";
import axios from "axios";
import { connect } from "react-redux";
import { loadUserInfo } from "../actions/user/userActions";
import { loadYogaInfo } from "../actions/yoga/yogaActions";
import { getAllYoga } from "../utils/API/yogaApi";

export default function (ChildComponent, withAuth = false, isAdmin = false) {
  class RequireAuth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        redirect: false,
        redirectNoAdmin: false,
      };
    }

    checkYogaClasse = () => {
      if (
        this.props.yogaClasses &&
        this.props.yogaClasses.array &&
        this.props.yogaClasses.array.length === 0
      ) {
        getAllYoga().then((res) => {
          this.props.loadYogaInfo(res.result);
        });
      }
    };
    componentDidMount = async () => {
      const token =
        window.localStorage && window.localStorage.getItem("AmalaToken");
      this.checkYogaClasse();
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
                if (response.data.user.role !== "admin" && isAdmin) {
                  this.setState({ redirectNoAdmin: true });
                }
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
    loadYogaInfo,
  };

  const mapStateToProps = (store) => {
    return {
      user: store.user,
      yogaClasses: store.yogaClasses,
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(RequireAuth);
}
