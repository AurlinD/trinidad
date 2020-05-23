import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="wrapper">
      <div className="header">LETS CONNECT</div>
      <div className="content">
        <div className="sub-header">
          * Give our department 3-5 working days to get back to you
        </div>
        <div className="boxes">
          <div className="left-box">
            <div className="left-box-fill-in">
              <div className="row">
                <div className="input">
                  <div className="input-information">NAME *</div>
                  <input className="input-field" type="text" />
                </div>
                <div className="input">
                  <div className="input-information">PHONE NUMBER</div>
                  <input className="input-field" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="input">
                  <div className="input-information">COMPANY</div>
                  <input className="input-field" type="text" />
                </div>
                <div className="input">
                  <div className="input-information">E-MAIL ADDRESS *</div>
                  <input className="input-field" type="text" />
                </div>
              </div>
              <div className="message">
                <div className="message-input">MESSAGE</div>
                <input className="message-field" type="text" />
              </div>
            </div>
          </div>

          <div className="right-box">
            <div className="right-box-header">
              EMAIL
              <div className="right-box-content">email@gmail.com</div>
            </div>
            <div className="right-box-header">
              NUMBER
              <div className="right-box-content">000-000-000</div>
            </div>
            <div className="right-box-header">
              OFFICE
              <div className="right-box-content">
                STREET NAME
                <br />
                COUNTRY CITY
              </div>
            </div>
            <div className="right-box-header">
              FOLLOW US
              <div className="right-box-content">emoticons</div>
            </div>
          </div>
        </div>
        <button className="send-button">
          <div className="button-content">
            <div className="button-message">SEND </div>
            <div className="button-icon">
              <i class="far fa-paper-plane"></i>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
