import React from "react";
import { Container, NavItem, Wrapper } from "./Navbar.styled";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <Wrapper>
      <Container>
        <StyledLink to="/">
          <NavItem>Browse</NavItem>
        </StyledLink>
        <StyledLink to="/cart">
          <NavItem>Cart</NavItem>
        </StyledLink>
      </Container>
    </Wrapper>
  );
}

export default Navbar;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
