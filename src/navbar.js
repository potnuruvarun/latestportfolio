import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./navbar.css";
import { Link } from "react-scroll";
export default function navbar() {
  return (
    <nav className="navbar">
      <div className="navbarcontainer">
        <div className="row">
          <div className="navbar-logo">
            <a style={{ fontSize: "medium" }} href="/">
              Varun Potnuru
            </a>
          </div>
          <div>
            <ul className="navbar-links">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust this value based on your navbar height
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust this value based on your navbar height
                  duration={500}
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust this value based on your navbar height
                  duration={500}
                >
                  work
                </Link>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <a href="https://in.linkedin.com/in/potnuru-varun-15a8a9240?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F">
              <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
