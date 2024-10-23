import React from "react";
import { Container, PrimeContent, PrimeHeader } from "./styled";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const AppLayout = () => {
  return (
    <Container>
      <PrimeHeader>
        <Link to="/">Home</Link>
        <Link to="/canvas">Canvas</Link>
        <Link to="/pokemon">Pokemon</Link>
      </PrimeHeader>
      <PrimeContent>
        <Outlet />
      </PrimeContent>
    </Container>
  );
};

export default AppLayout;
