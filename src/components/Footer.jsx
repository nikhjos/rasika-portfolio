import React from "react";
import { socialLinks } from "../assets/data";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div id="footer">
      <section className="footer">
        <Logo />

        <div className="footer-links">
          {socialLinks.map((link) => {
            const { id, href, name } = link;
            return (
              <a key={id} href={href} className="link">
                <img src={name} />
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Footer;
