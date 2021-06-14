import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { Container, Navbar, Nav } from "react-bootstrap";
import { logout } from "../../components/login/LoginActions";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Button from "@material-ui/core/Button";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      sidebar: false,
    };
  }

  showSidebar = () => {
    this.sidebar = true;
    console.log("kliked");
  };

  onLogout = () => {
    this.props.logout();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <Navbar bg="light">
          <Navbar.Brand>
            <Button onClick={this.showSidebar}>
              <MenuRoundedIcon />
            </Button>
            Dashboard
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              User: <b>{user.username}</b>
            </Navbar.Text>
            <Nav.Link onClick={this.onLogout}>Logout</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
        <Container>{this.state.sidebar && <h1>aaaaaa</h1>}</Container>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  logout,
})(withRouter(Dashboard));
