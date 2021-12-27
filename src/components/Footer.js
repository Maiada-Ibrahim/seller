import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
// import LogoutButton from './logout';
import { Link } from "react-router-dom";
import "./CSS/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <div className="TV FTV">
            <div>
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
                  }}
                >
                  Absher
                </span>
              </Navbar.Brand>
            </div>
            <div className="conti">
              <span
                className="rights"
                style={{ zIndex: "2", color: "white", marginTop: "0.7rem" }}
              >
               2021 &copy; All Rights Reserved - Maiada Ibrahim
              </span>
            </div>
            <span style={{color: "white"}}>
                Contact Us &nbsp; &nbsp; <FontAwesomeIcon icon={faPhone} />{" "}
                06-600-1123622 &nbsp; &nbsp; <FontAwesomeIcon icon={faEnvelope} />{" "}
                Absher.support@gmail.com
              </span>

          </div>
        </Navbar>
      </div>
    );
  }
}

export default Footer;