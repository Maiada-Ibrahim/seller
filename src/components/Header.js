import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap/";
import { Link } from "react-router-dom";
import LoginButton from "./loginButton";
import LogoutButton from "./logout";
import { withAuth0 } from "@auth0/auth0-react";
import "./CSS/Header.css";

class Header extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="TV">
          <Link to="/">
            {" "}
            <img
              src="https://play-lh.googleusercontent.com/KJe9bx2E52j0T-YCc5_hWkEgbFbJzNFVTqZhpgqyS3Vefp-Zg_1MoCZLzTdyGzVIHF0"
              alt="logo"
              width="100px"
            />
          </Link>
          <Navbar.Brand>
            <span
              style={{
                color: "white",
                fontSize: "2pc",
                fontWeight: "bolder",
                userSelect: "none",
              }}
            >
            Absher
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              <Link
                className="link"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "0.5rem",
                }}
                to="/"
              >
                Home
              </Link>
              <Link
                className="link"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "0.5rem",
                }}
                to="/profile"
              >
                Profile
              </Link>

              <Link
                className="link"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "0.5rem",
                }}
                to="/aboutus"
              >
                About us
              </Link>
            </Nav>
          </Navbar.Collapse>

          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          {isAuthenticated ? (
            <Link to="/profile">
              <img
                className="userImg"
                src={user.picture}
                alt="logo"
                width="49px"
              />
            </Link>
          ) : (
            <img
              className="userImg usertwo"
              src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
              alt="logo"
              width="50px"
            />
          )}
        </div>
      </Navbar>
    );
  }
}

export default withAuth0(Header);