import React from "react";
import { Container, Button, Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const welcomePage = () => {
  return (
    <Container>
      <Typography variant="h1" component="h1">
        Welcome To Uni Tracker!
      </Typography>
      <Typography variant="h3" component="h3">
        Please Log In or Register to continue.
      </Typography>
      <Grid>
        <Link to="/login">
          <Button>Log in</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
      </Grid>
    </Container>
  );
};

export default welcomePage;
