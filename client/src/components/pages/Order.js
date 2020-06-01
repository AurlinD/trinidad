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
            <div className="row-order">
              <div className="input-order">
                <div className="input-information-order">FIRST NAME *</div>
                <input className="input-field-order" type="text" />
              </div>
              <div className="input-order">
                <div className="input-information-order">LAST NAME</div>
                <input className="input-field-order" type="text" />
              </div>
            </div>
            <div className="row-order">
              <div className="input-order">
                <div className="input-information-order">PHONE NUMBER</div>
                <input className="input-field-order" type="text" />
              </div>
              <div className="input-order">
                <div className="input-information-order">EMAIL ADDRESS</div>
                <input className="input-field-order" type="text" />
              </div>
            </div>
            <div className="row-order">
              <div className="input-order">
                <div className="input-information-order">COMPANY</div>
                <input className="input-field-order" type="text" />
              </div>
              <div className="input-order">
                <div className="input-information-order">
                  PREFERRED CONTACT (PHONE/EMAIL)
                </div>
                <input className="input-field-order" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-order">
          <div className="sub-header-contact-order">* Product Information</div>
          <div className="box-order-order">
            <div className="row-order">
              <div className="input-order">
                <div className="input-information-order">VISCOSITY</div>
                <input className="input-field-order" type="text" />
              </div>
              <div className="input-order">
                <div className="input-information-order">CURE SPEED</div>
                <input className="input-field-order" type="text" />
              </div>
            </div>
            <div className="row-order">
              <div className="input-order">
                <div className="input-information-order">COLOR</div>
                <input className="input-field-order" type="text" />
              </div>
              <div className="input-order">
                <div className="input-information-order">ADHESION TO</div>
                <input className="input-field-order" type="text" />
              </div>
            </div>
            <div className="row-order">
              <div className="input-order">
                <div className="input-information-order">TENSILE STRENGTH</div>
                <input className="input-field-order" type="text" />
              </div>
              <div className="input-order">
                <div className="input-information-order">TEAR STRENGTH</div>
                <input className="input-field-order" type="text" />
              </div>
            </div>
            <div className="row-order">
              <div className="input-order">
                <div className="input-information-order">ELONGATION</div>
                <input className="input-field-order" type="text" />
              </div>
              <div className="input-order">
                <div className="input-information-order">MODULUS</div>
                <input className="input-field-order" type="text" />
              </div>
            </div>
            <div className="row-order">
              <div className="input-order">
                <div className="input-information-order">
                  TEMPERATURE RESISTANT
                </div>
                <input className="input-field-order" type="text" />
              </div>
              <div className="input-order">
                <div className="input-information-order">CURE SYSTEM</div>
                <input className="input-field-order" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="additional-comments">
          <div className="additional-comments-content">
            <div className="additional-comments-information">
              ADDITIONAL COMMENTS
            </div>
            <textarea className="additional-comments-form" />
          </div>
        </div>
        <button className="button-order">
          <div className="left-content-button-order">ORDER</div>
          <div className="right-content-button-order">
            <i class="fas fa-chevron-down fa-2x"></i>
          </div>
        </button>
      </div>
    </div>
  );
}
