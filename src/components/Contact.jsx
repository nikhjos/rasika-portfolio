import React from "react";
import { socialLinks } from "../assets/data";

const Contact = () => {
  return (
    <section>
      <div id="contact">
        <div className="contact">
          <div className="title">
            <h3>Contact Me</h3>
          </div>
          <form>
            <h3>Email Me</h3>
            <div className="form-field">
              <input type="text" id="name" />
              <label htmlFor="name" className="label">
                your name
              </label>
            </div>

            <div className="form-field">
              <input type="email" id="email" />
              <label htmlFor="email" className="label">
                your email
              </label>
            </div>

            <div className="form-field">
              <textarea id="message" cols="30" rows="10"></textarea>
              <label htmlFor="message" className="label">
                your message
              </label>
            </div>

            <button type="submit">send</button>

            <div className="contact-links">
              {socialLinks.map((link) => {
                const { id, href, name } = link;
                return (
                  <a key={id} href={href} className="link">
                    <img src={name} />
                  </a>
                );
              })}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
