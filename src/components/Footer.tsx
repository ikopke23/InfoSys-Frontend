import React from "react";
import {
  Container,
  Navbar,
} from "reactstrap";
import {NavLink} from "react-router-dom";

const Footer: React.FunctionComponent = () => {

  return (
    <div>
      <Navbar color="primary" dark expand="lg">
        <Container>
          <NavLink to="profiles.csh.rit.edu/user/stove" className={"navbar-brand"}>
            Made by @stove
          </NavLink>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
