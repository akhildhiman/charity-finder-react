import React from "react";
import { Navbar, Jumbotron, Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Charity Finder</Navbar.Brand>
      </Navbar>
      <Jumbotron>
        <h1>Charity Finder App</h1>
        <p>
          This is a simple app that lets you browse charities from across the
          world.
        </p>
        <p>
          <Button variant="primary">Get Started</Button>
        </p>
      </Jumbotron>
    </>
  );
};

export default Home;
