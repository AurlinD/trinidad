import React from "react";
import "../styles/reset.css";
import "../styles/order.css";

export default function FormFieldsContact(props) {
  return (
    <div className="row-order">
      <div className="input-order">
        <div className="input-information-order">{props.name1}</div>
        <input
          className="input-field-order"
          type="text"
          onChange={(event) => {
            props.function1(event.target.value);
          }}
          value={props.state1}
        />
      </div>
      <div className="input-order">
        <div className="input-information-order">{props.name2}</div>
        <input
          className="input-field-order"
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
