import React, { useState } from "react";
import "../styles/footer.css";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handelSubmit = (e) => {
    console.log(name);
    console.log(email);
    console.log(message);
  };
  return (
    <footer>
      <div>
      <p>Get In Touch</p>
      <div className="card">
        <div className="contact_form">
          <label>Your Name</label>
          <br></br>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <br></br>
          <label>Your Email</label>
          <br></br>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <br></br>
          <label>Your Message</label>
          <br></br>
          <textarea
            type="email"
            placeholder="Write Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <br></br>
          <button type="button" onClick={handelSubmit}>
            Submit
          </button>
        </div>
      </div>

      <p>&copy; {new Date().getFullYear()} Raghu</p>
      </div>
    </footer>
  );
};

export default Footer;
