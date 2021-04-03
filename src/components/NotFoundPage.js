import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <Jumbotron fluid>
      <Container className="text-center">
        <h1>404</h1>
        <p>Page Not Found!.</p>
      </Container>
    </Jumbotron>
  );
};

export default NotFoundPage;
