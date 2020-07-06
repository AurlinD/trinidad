import React from "react";
import "../styles/reset.css";
import "../styles/contact.css";

export default function FormFieldsContact(props) {
  return (
    <div className="row-contact">
      <div className="input-contact">
        <div className="input-information-contact">{props.name1}</div>
        <input
          className="input-field-contact"
          type="text"
          onChange={(event) => {
            props.function1(event.target.value);
          }}
          value={props.state1}
        />
      </div>
      <div className="input-contact">
        <div className="input-information-contact">{props.name2}</div>
        <input
          className="input-field-contact"
          type="text"
          onChange={(event) => {
            props.function2(event.target.value);
          }}
          value={props.state2}
        />
      </div>
    </div>
  );
}
