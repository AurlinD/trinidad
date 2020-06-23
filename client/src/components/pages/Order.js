import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/reset.css";
import "../styles/order.css";
import Error from "../helpers/Error";
import Confirmation from "../helpers/Confirmation";
import FormFieldsOrder from "../helpers/FormFieldsOrder";

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

  const [error, setError] = useState(false);
  const [confirm, setConfirm] = useState(false);

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

    if (fname && email !== "") {
      setError(false);

      emailjs
        .send(
          "default_service",
          "test",
          templateParams,
          "user_RYx15GsW6E6KTjMmRGDjT"
        )
        .then(
          function (response) {
            setConfirm(true);
            setFname("");
            setLname("");
            setNumber("");
            setEmail("");
            setCompany("");
            setPcontact("");
            setViscosity("");
            setCurespeed("");
            setColor("");
            setAdhesion("");
            setTensile("");
            setTear("");
            setElongation("");
            setModulus("");
            setTemperature("");
            setCure("");
            setComments("");
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
    <div className="wrapper-order">
      <div className="header-order">ORDER</div>
      {error ? <Error /> : null}
      {confirm ? <Confirmation /> : null}
      <div className="content-order">
        <div className="contact-order">
          <div className="sub-header-contact-order">* Contact Information</div>
          <div className="box-contact-order">
            <FormFieldsOrder
              name1="FIRST NAME *"
              name2="LAST NAME"
              function1={setFname}
              function2={setLname}
              state1={fname}
              state2={lname}
            />
            <FormFieldsOrder
              name1="PHONE NUMBER"
              name2="EMAIL ADDRESS *"
              function1={setNumber}
              function2={setEmail}
              state1={number}
              state2={email}
            />
            <FormFieldsOrder
              name1="COMPANY"
              name2="PREFFERED CONTACT (PHONE/EMAIL)"
              function1={setCompany}
              function2={setPcontact}
              state1={company}
              state2={pcontact}
            />
          </div>
        </div>
        <div className="contact-order">
          <div className="sub-header-contact-order">* Product Information</div>
          <div className="box-order-order">
            <FormFieldsOrder
              name1="VISCOSITY"
              name2="CURE SPEED"
              function1={setViscosity}
              function2={setCurespeed}
              state1={viscosity}
              state2={curespeed}
            />
            <FormFieldsOrder
              name1="COLOR"
              name2="ADHESION TO"
              function1={setColor}
              function2={setAdhesion}
              state1={color}
              state2={adhesion}
            />
            <FormFieldsOrder
              name1="TENSILE STRENGTH"
              name2="TEAR STRENGTH"
              function1={setTensile}
              function2={setTear}
              state1={tensile}
              state2={tear}
            />
            <FormFieldsOrder
              name1="ELONGATION"
              name2="MODULUS"
              function1={setElongation}
              function2={setModulus}
              state1={elongation}
              state2={modulus}
            />
            <FormFieldsOrder
              name1="TEMPERATURE RESISTANT"
              name2="CURE SYSTEM"
              function1={setTemperature}
              function2={setCure}
              state1={temperature}
              state2={cure}
            />
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
