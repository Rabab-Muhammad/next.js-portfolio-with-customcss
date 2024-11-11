import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { RxMobile } from "react-icons/rx";
import "../app/styles/contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid md:grid-col-2">
        <div className="contact-space">
          <h2 className="contact-h2">Connect with Me</h2>
          <p className="contact-para">
            Feel free to reach out—whether by call or message—by simply filling
            out the form below. Let&apos;s connect!
          </p>
          <div className="contact-flex">
            <MdOutlineMail size={30} />
            rababmuhammadhussain@gmail.com
          </div>
          <div className="contact-flex">
            <RxMobile size={30} /> +923162217017
          </div>
        </div>
        <div
          className="contact-space"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="form">
            <label htmlFor="name">Name</label>
            <input type="text" className="input-field" id="name" />
          </div>
          <div className="form">
            <label htmlFor="email">Email</label>
            <input type="text" className="input-field" id="email" />
          </div>
          <div className="form">
            <label htmlFor="msg">Message</label>
            <textarea className="textarea-field" id="msg" rows={8}></textarea>
          </div>
          <button className="button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
