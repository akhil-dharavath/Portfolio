import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import "../assets/Navbar.css";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className="navbar">
      <a className="name" href="/">
        Akhil Dharavath
      </a>
      <IconButton
        className={`${mobileNav ? "d-none" : "menu-icon"}`}
        sx={{ ":hover": { background: "none" } }}
        onClick={() => setMobileNav(!mobileNav)}
      >
        <MenuIcon />
      </IconButton>
      <div className="nav-items">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className={`${!mobileNav ? "d-none" : "mobile-nav"} text-white`}>
        <button
          className={`${!mobileNav ? "d-none" : "nav-button"}`}
          onClick={() => setMobileNav(!mobileNav)}
        >
          x
        </button>
        <div className="navs">
          <a href="#home" onClick={() => setMobileNav(!mobileNav)}>
            Home
          </a>
          <a href="#about" onClick={() => setMobileNav(!mobileNav)}>
            About
          </a>
          <a href="#projects" onClick={() => setMobileNav(!mobileNav)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMobileNav(!mobileNav)}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
