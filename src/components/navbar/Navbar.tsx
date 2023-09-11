import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { PersonVcard } from "react-bootstrap-icons";
import { FileEarmarkText } from "react-bootstrap-icons";

export const KNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      variant="dark"
      sticky="top"
      className="blur grey"
      expand="sm"
      expanded={expanded}
    >
      <Navbar.Brand onClick={() => setExpanded(false)} as={Link} to="/">
        Kishan M
      </Navbar.Brand>
      <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant="pills" className="me-auto" defaultActiveKey="/">
          <NavLink
            to="/"
            className="nav-link"
            onClick={() => setExpanded(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className="nav-link"
            onClick={() => setExpanded(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link"
            onClick={() => setExpanded(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/resume"
            className="nav-link"
            onClick={() => setExpanded(false)}
          >
            Resume
          </NavLink>
        </Nav>
        <Nav className="d-flex">
          <a href="./vcard.vcf" className="navbar-btn">
            <PersonVcard size={24} />
          </a>
          <a
            href="./KishanManoharanResume-2023.3.pdf"
            className="navbar-btn"
            target="_blank"
          >
            <FileEarmarkText size={24} />
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
