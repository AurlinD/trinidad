import React from "react";
import "../styles/reset.css";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="wrapper-contact">
      <div className="header-contact">LETS CONNECT</div>
      <div className="content-contact">
        <div className="sub-header-contact">
          * Give our department 3-5 working days to get back to you
        </div>
        <div className="boxes-contact">
          <div className="left-box-contact">
            <div className="left-box-fill-in-contact">
              <div className="row-contact">
                <div className="input-contact">
                  <div className="input-information-contact">NAME *</div>
                  <input className="input-field-contact" type="text" />
                </div>
                <div className="input-contact">
                  <div className="input-information-contact">PHONE NUMBER</div>
                  <input className="input-field-contact" type="text" />
                </div>
              </div>

              <div className="row-contact">
                <div className="input-contact">
                  <div className="input-information-contact">COMPANY</div>
                  <input className="input-field-contact" type="text" />
                </div>
                <div className="input-contact">
                  <div className="input-information-contact">
                    E-MAIL ADDRESS *
                  </div>
                  <input className="input-field-contact" type="text" />
                </div>
              </div>
              <div className="message-contact">
                <div className="message-input-contact">MESSAGE</div>
                <textarea className="message-field-contact" />
              </div>
            </div>
          </div>

          <div className="right-box-contact">
            <div className="right-box-header-contact">
              EMAIL
              <div className="right-box-content-contact">email@gmail.com</div>
            </div>
            <div className="right-box-header-contact">
              NUMBER
              <div className="right-box-content-contact">000-000-000</div>
            </div>
            <div className="right-box-header-contact">
              OFFICE
              <div className="right-box-content-contact">
                STREET NAME
                <br />
                COUNTRY CITY
              </div>
            </div>
            <div className="right-box-header-contact">
              FOLLOW US
              <div className="right-box-content-contact">emoticons</div>
            </div>
          </div>
        </div>
        <button className="send-button-contact">
          <div className="left-content-button-contact">SEND</div>
          <div className="right-content-button-contact">
            <i class="far fa-paper-plane fa-2x"></i>
          </div>
        </button>
      </div>
    </div>
  );
}
