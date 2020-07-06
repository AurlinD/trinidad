import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/reset.css";
import "../styles/contact.css";
import Error from "../helpers/Error";
import Confirmation from "../helpers/Confirmation";
import FormFieldsContact from "../helpers/FormFieldsContact";

export default function Contact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState(false);
  const [confirm, setConfirm] = useState(false);

  function onSave() {
    var templateParams = {
      name: name,
      number: number,
      company: company,
      email: email,
      message: message,
    };

    if (name && email !== "") {
      setError(false);

      emailjs
        .send(
          "default_service",
          "template_d6ZRc6tw",
          templateParams,
          "user_RYx15GsW6E6KTjMmRGDjT"
        )
        .then(
          function (response) {
            setConfirm(true);
            setName("");
            setNumber("");
            setEmail("");
            setMessage("");
            setCompany("");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    } else {
      setError(true);
      setConfirm(false);
    }
  }
  return (
    <div className="wrapper-contact">
      <div className="header-contact">LETS CONNECT</div>
      {error ? <Error /> : null}
      {confirm ? <Confirmation /> : null}
      {}
      <div className="content-contact">
        <div className="sub-header-contact">
          * Give our department 3-5 working days to get back to you
        </div>
        <div className="boxes-contact">
          <div className="left-box-contact">
            <div className="left-box-fill-in-contact">
              <FormFieldsContact
                name1="NAME *"
                name2="PHONE NUMBER"
                function1={setName}
                function2={setNumber}
                state1={name}
                state2={number}
              />
              <FormFieldsContact
                name1="COMPANY"
                name2="E-MAIL ADDRESS *"
                function1={setCompany}
                function2={setEmail}
                state1={company}
                state2={email}
              />
              <div className="message-contact">
                <div className="message-input-contact">MESSAGE</div>
                <textarea
                  className="message-field-contact"
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                  value={message}
                />
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
            {/* <div className="right-box-header-contact">
              FOLLOW US
              <div className="right-box-content-contact">emoticons</div>
            </div> */}
          </div>
        </div>
        <button className="send-button-contact" onClick={onSave}>
          <div className="left-content-button-contact">SEND</div>
          <div className="right-content-button-contact">
            <i className="far fa-paper-plane fa-2x"></i>
          </div>
        </button>
      </div>
    </div>
  );
}
