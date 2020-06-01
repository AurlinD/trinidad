import React from "react";
import "../styles/reset.css";
import "../styles/order.css";

export default function Order() {
  return (
    <div className="wrapper-order">
      <div className="header-order">ORDER</div>
      <div className="content-order">
        <div className="contact-order">
          <div className="sub-header-contact-order">* Contact Information</div>
          <div className="box-contact-order">
            <div className="row-contact">
              <div className="input-contact">
                <div className="input-information-contact">FIRST NAME *</div>
                <input className="input-field-contact" type="text" />
              </div>
              <div className="input-contact">
                <div className="input-information-contact">LAST NAME</div>
                <input className="input-field-contact" type="text" />
              </div>
            </div>
            <div className="row-contact">
              <div className="input-contact">
                <div className="input-information-contact">PHONE NUMBER</div>
                <input className="input-field-contact" type="text" />
              </div>
              <div className="input-contact">
                <div className="input-information-contact">EMAIL ADDRESS</div>
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
                  PREFERRED CONTACT (PHONE/EMAIL)
                </div>
                <input className="input-field-contact" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-order">
          <div className="sub-header-contact-order">* Product Information</div>
          <div className="box-contact-order">
            <div className="row-contact">
              <div className="input-contact">
                <div className="input-information-contact">VISCOSITY</div>
                <input className="input-field-contact" type="text" />
              </div>
              <div className="input-contact">
                <div className="input-information-contact">CURE SPEED</div>
                <input className="input-field-contact" type="text" />
              </div>
            </div>
            <div className="row-contact">
              <div className="input-contact">
                <div className="input-information-contact">COLOR</div>
                <input className="input-field-contact" type="text" />
              </div>
              <div className="input-contact">
                <div className="input-information-contact">ADHESION TO</div>
                <input className="input-field-contact" type="text" />
              </div>
            </div>
            <div className="row-contact">
              <div className="input-contact">
                <div className="input-information-contact">
                  TENSILE STRENGTH
                </div>
                <input className="input-field-contact" type="text" />
              </div>
              <div className="input-contact">
                <div className="input-information-contact">TEAR STRENGTH</div>
                <input className="input-field-contact" type="text" />
              </div>
            </div>
            <div className="row-contact">
              <div className="input-contact">
                <div className="input-information-contact">ELONGATION</div>
                <input className="input-field-contact" type="text" />
              </div>
              <div className="input-contact">
                <div className="input-information-contact">MODULUS</div>
                <input className="input-field-contact" type="text" />
              </div>
            </div>
            <div className="row-contact">
              <div className="input-contact">
                <div className="input-information-contact">
                  TEMPERATURE RESISTANT
                </div>
                <input className="input-field-contact" type="text" />
              </div>
              <div className="input-contact">
                <div className="input-information-contact">CURE SYSTEM</div>
                <input className="input-field-contact" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="message-contact">
          <div className="message-input-contact">ADDITIONAL COMMENTS</div>
          <textarea className="message-field-contact" />
        </div>
      </div>
    </div>
  );
}
