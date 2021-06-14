import React, { Component } from "react";
import { withRouter } from "react-router-dom"; // new import
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";

import { signupNewUser } from "./SignupActions"; // new import

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // update function to call the action
  onSignupClick = () => {
    const userData = {
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      password: this.state.password,
      confirm_password: this.state.confirm_password,
    };
    this.props.signupNewUser(userData); // <-- signup new user request
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <h1>Sign up</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  isInvalid={this.props.createUser.usernameError}
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <FormControl.Feedback type="invalid">
                  {this.props.createUser.usernameError}
                </FormControl.Feedback>
              </Form.Group>

              <Form.Group controlId="firstNameId">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  isInvalid={this.props.createUser.firstNameError}
                  type="text"
                  name="first_name"
                  placeholder="Enter First Name"
                  value={this.first_name}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid">
                  {this.props.createUser.firstNameError}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="lastNameId">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  isInvalid={this.props.createUser.lastNameError}
                  type="text"
                  name="last_name"
                  placeholder="Enter Last Name"
                  value={this.last_name}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid">
                  {this.props.createUser.lastNameError}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="emailId">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  isInvalid={this.props.createUser.emailError}
                  type="email"
                  name="email"
                  placeholder="Enter E-mail"
                  value={this.email}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid">
                  {this.props.createUser.emailError}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  isInvalid={this.props.createUser.passwordError}
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.password}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid">
                  {this.props.createUser.passwordError}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="confirmPasswordId">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  isInvalid={this.props.createUser.confirmpasswordError}
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm password"
                  value={this.confirm_password}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid">
                  {this.props.createUser.confirmpasswordError}
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button color="primary" onClick={this.onSignupClick}>
              Sign up
            </Button>
            <p className="mt-2">
              Already have account? <Link to="/login">Login</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

// connect action and reducer
// replace
// export default Signup;
// with code below:

Signup.propTypes = {
  signupNewUser: PropTypes.func.isRequired,
  createUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  createUser: state.createUser,
});

export default connect(mapStateToProps, {
  signupNewUser,
})(withRouter(Signup));
