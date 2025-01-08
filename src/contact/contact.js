import react from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="Info">
            <h1 className="custom-fonth">contact</h1>
          </div>
          <div className="divider">
            <hr style={{ color: "white" }}></hr>
          </div>
        </div>

        <p className="custom-font">
          I would love to hear about your project and how I can help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
        <div class="form-container">
          <form>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />

            <label for="email">Email</label>
            <input type="email" id="email" name="email" />

            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="row">
          <div className="Info">
            <h1 style={{ fontSize: "large",color:"white" }}>Varun Potnuru</h1>
          </div>
          <div className="social-media">
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} size="lg" color="white" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} size="lg" color="white" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
