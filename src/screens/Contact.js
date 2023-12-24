import emailjs from "@emailjs/browser";
import { IconButton } from "@mui/material";
import React, { useRef } from "react";
import "../assets/Contact.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactForm = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLETE_KEY,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Data sent successfully");
          e.target.reset();
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div className="form" id="contact">
      <h1 className="contact-heading">GET IN TOUCH</h1>
      <form className="right" ref={form} onSubmit={handleSubmit}>
        <input placeholder="Name" name="name" />
        <input placeholder="Subject" name="subject" required />
        <input placeholder="Email" name="email" />
        <textarea placeholder="Message" rows={5} name="message" required />
        <button type="submit" className="btn btn-primary">
          SEND MESSAGE
        </button>
      </form>
      <div className="left">
      <h1 className="contact_big">GET IN TOUCH</h1>
        <div>
          <IconButton href="https://github.com/akhildgithub" target='_blank'>
            <GitHubIcon sx={{ color: "#2b3137" }} />
          </IconButton>
          <p>akhildgithub</p>
        </div>
        <div>
          <IconButton href="https://www.linkedin.com/in/dharavath-akhil/" target='_blank'>
            <LinkedInIcon sx={{ color: "#0077b5" }} />
          </IconButton>
          <p>dharavath-akhil</p>
        </div>
        <div>
          <IconButton href="https://www.instagram.com/_akhil.dharavath_/" target='_blank'>
            <InstagramIcon sx={{ color: "#E4405F" }} />
          </IconButton>
          <p>_akhil.dharavath_</p>
        </div>
        <div>
          <IconButton href="https://www.facebook.com/akhil.dharavath.7" target='_blank'>
            <FacebookIcon sx={{ color: "#316FF6" }} />
          </IconButton>
          <p>akhil.dharavath.7</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
