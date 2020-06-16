import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/reset.css";
import "../styles/order.css";

export default function Order() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [pcontact, setPcontact] = useState("");
  const [viscosity, setViscosity] = useState("");
  const [curespeed, setCurespeed] = useState("");
  const [color, setColor] = useState("");
  const [adhesion, setAdhesion] = useState("");
  const [tensile, setTensile] = useState("");
  const [tear, setTear] = useState("");
  const [elongation, setElongation] = useState("");
  const [modulus, setModulus] = useState("");
  const [temperature, setTemperature] = useState("");
  const [cure, setCure] = useState("");
  const [comments, setComments] = useState("");

  function onSave() {
    var templateParams = {
      fname: fname,
      lname: lname,
      number: number,
      email: email,
      company: company,
      pcontact: pcontact,
      viscosity,
      curespeed: curespeed,
      color: color,
      adhesion: adhesion,
      tensile: tensile,
      tear: tear,
      elongation: elongation,
      modulus: modulus,
      temperature: temperature,
      cure: cure,
      comments: comments,
    };

    emailjs
      .send(
        "default_service",
        "test",
        templateParams,
        "user_RYx15GsW6E6KTjMmRGDjT"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }

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
                <input
                  className="input-field-order"
                  type="text"
                  onChange={(event) => {
                    setFname(event.target.value);
                  }}
                  value={fname}
                />
              </div>
              <div className="input-order">
                <div className="input-information-order">LAST NAME</div>
                <input
                  className="input-field-order"
                  type="text"
                  onChange={(event) => {
                    setLname(event.target.value);
                  }}
                  value={lname}
                />
              </div>
            </div>
            <div className="row-order">
              <div className="input-order">
                <div className="input-information-order">PHONE NUMBER</div>
                <input
                  className="input-field-order"
                  type="text"
                  onChange={(event) => {
                    setNumber(event.target.value);
                  }}
                  value={number}
                />
              </div>
              <div className="input-order">
                <div className="input-information-order">EMAIL ADDRESS</div>
                <input
                  className="input-field-order"
                  type="text"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  value={email}
                />
              </div>
            </div>
            <div className="row-order">
              <div className="input-order">
                <div className="input-information-order">COMPANY</div>
                <input
                  className="input-field-order"
                  type="text"
                  onChange={(event) => {
                    setCompany(event.target.value);
                  }}
                  value={company}
                />
              </div>
              <div className="input-order">
                <div className="input-information-order">
                  PREFERRED CONTACT (PHONE/EMAIL)
                </div>
                <input
                  className="input-field-order"
                  type="text"
                  onChange={(event) => {
                    setPcontact(event.target.value);
                  }}
                  value={pcontact}
                />
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
                <input
                  className="input-field-order"
                  type="text"
                  onChange={(event) => {
                    setViscosity(event.target.value);
                  }}
                  value={viscosity}
                />
              </div>
              <div className="input-order">
                <div className="input-information-order">CURE SPEED</div>
                <input
                  className="input-field-order"
                  type="text"
                  onChange={(event) => {
                    setCurespeed(event.target.value);
                  }}
                  value={curespeed}
                />
              </div>
            </div>
            <div className="row-order">
              <div className="input-order">
                <div className="input-information-order">COLOR</div>
                <input
                  className="input-field-order"
                  type="text"
                  onChange={(event) => {
                    setColor(event.target.value);
                  }}
                  value={color}
                />
              </div>
              <div className="input-order">
                <div className="input-information-order">ADHESION TO</div>
                <input
                  className="input-field-order"
                  type="text"
                  onChange={(event) => {
                    setAdhesion(event.target.value);
                  }}
                  value={adhesion}
                />
              </div>
            </div>
            <div className="row-order">
              <div className="input-order">
                <div className="input-information-order">TENSILE STRENGTH</div>
                <input
                  className="input-field-order"
                  type="text"
                  onChange={(event) => {
                    setTensile(event.target.value);
                  }}
                  value={tensile}
                />
              </div>
              <div className="input-order">
                <div className="input-information-order">TEAR STRENGTH</div>
                <input
                  className="input-field-order"
                  type="text"
                  onChange={(event) => {
                    setTear(event.target.value);
                  }}
                  value={tear}
                />
              </div>
            </div>
            <div className="row-order">
              <div className="input-order">
                <div className="input-information-order">ELONGATION</div>
                <input
                  className="input-field-order"
                  type="text"
                  onChange={(event) => {
                    setElongation(event.target.value);
                  }}
                  value={elongation}
                />
              </div>
              <div className="input-order">
                <div className="input-information-order">MODULUS</div>
                <input
                  className="input-field-order"
                  type="text"
                  onChange={(event) => {
                    setModulus(event.target.value);
                  }}
                  value={modulus}
                />
              </div>
            </div>
            <div className="row-order">
              <div className="input-order">
                <div className="input-information-order">
                  TEMPERATURE RESISTANT
                </div>
                <input
                  className="input-field-order"
                  type="text"
                  onChange={(event) => {
                    setTemperature(event.target.value);
                  }}
                  value={temperature}
                />
              </div>
              <div className="input-order">
                <div className="input-information-order">CURE SYSTEM</div>
                <input
                  className="input-field-order"
                  type="text"
                  onChange={(event) => {
                    setCure(event.target.value);
                  }}
                  value={cure}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="additional-comments">
          <div className="additional-comments-content">
            <div className="additional-comments-information">
              ADDITIONAL COMMENTS
            </div>
            <textarea
              className="additional-comments-form"
              onChange={(event) => {
                setComments(event.target.value);
              }}
              value={comments}
            />
          </div>
        </div>
        <button className="button-order" onClick={onSave}>
          <div className="left-content-button-order">ORDER</div>
          <div className="right-content-button-order">
            <i className="fas fa-chevron-down fa-2x"></i>
          </div>
        </button>
      </div>
    </div>
  );
}
