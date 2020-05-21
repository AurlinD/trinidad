import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="wrapper">
      <div className="header">Let's Connect</div>
      <div className="content">
        <div className="sub-header">
          * Give our department 3-5 working days to get back to you
        </div>
        <div className="boxes">
          <div className="left-box">
            <div className="left-box-fill-in">
              <div className="row">
                <div className="input">
                  <div className="input-information">Name *</div>
                  <input className="input-field" type="text" />
                </div>
                <div className="input">
                  <div className="input-information">Phone Number</div>
                  <input className="input-field" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="input">
                  <div className="input-information">Company</div>
                  <input className="input-field" type="text" />
                </div>
                <div className="input">
                  <div className="input-information">E-Mail Address *</div>
                  <input className="input-field" type="text" />
                </div>
              </div>
              <div className="message">
                <div className="message-input">Message</div>
                <input className="message-field" type="text" />
              </div>
            </div>

            <button className="send-button">Send</button>
          </div>

          <div className="right-box">
            <div className="right-box-header">
              Email
              <div className="right-box-content">email@gmail.com</div>
            </div>
            <div className="right-box-header">
              Number
              <div className="right-box-content">000-000-000</div>
            </div>
            <div className="right-box-header">
              Office
              <div className="right-box-content">Street name,Country City</div>
            </div>
            <div className="right-box-header">
              Follow Us
              <div className="right-box-content">emoticons</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
