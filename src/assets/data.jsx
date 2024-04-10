import { nanoid } from "nanoid";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import facebook from "../assets/facebook.png";

export const pageLinks = [
  { id: nanoid(), name: "Home", href: "#hero" },
  { id: nanoid(), name: "About", href: "#about" },
  { id: nanoid(), name: "Skill", href: "#skill" },
  { id: nanoid(), name: "Contact", href: "#contact" },
];

export const singlePageLinks = [
  { id: nanoid(), name: "Home", href: "#hero" },
  { id: nanoid(), name: "About", href: "#about" },
  { id: nanoid(), name: "Skill", href: "#skill" },
  { id: nanoid(), name: "Contact", href: "#contact" },
];

export const socialLinks = [
  { id: nanoid(), name: linkedin, href: "www.facebook.com" },
  { id: nanoid(), name: instagram, href: "www.instagram.com" },

  { id: nanoid(), name: facebook, href: "www.Twitter.com" },
];
