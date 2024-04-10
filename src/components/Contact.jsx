import React from "react";
import { socialLinks } from "../assets/data";
import Title from "./Title";

const Contact = () => {
  return (
    <section>
      <div id="contact">
        <Title name="Contact Me" />
        <form>
          <h3>Email Me</h3>
          <div className="form-field">
            <input type="text" id="name" placeholder="name" />
            <label htmlFor="name" className="label">
              your name
            </label>
          </div>

          <div className="form-field">
            <input type="email" id="email" placeholder="email" />
            <label htmlFor="email" className="label">
              your email
            </label>
          </div>

          <div className="form-field">
            <textarea
              id="message"
              cols="30"
              rows="10"
              placeholder="message"
            ></textarea>
            <label htmlFor="message" className="label">
              your message
            </label>
          </div>

          <button type="submit">send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
