import React from "react";
import "./styles/footer.css";
import "./styles/reset.css";

export default function Footer() {
  return (
    <div className="wrapper-footer">
      <div className="container-white-background-footer">
        <div className="container-content">
          <div className="left-container-footer">
            <div className="row-footer">
              <div className="info-footer">
                EMAIL
                <div className="info-content-footer">ExampleMail@Gmail.com</div>
              </div>
              <div className="info-footer">
                OFFICE
                <div className="info-content-footer">
                  Street Name,
                  <br /> Country,City
                </div>
              </div>
            </div>
            <div className="row-footer">
              <div className="info-footer">
                NUMBER<div className="info-content-footer">000-000-000</div>
              </div>
            </div>
          </div>
          <div className="middle-container">
            <div className="social-media">SC</div>
          </div>
          <div className="right-container">
            <div className="question-container">
              GOT QUESTION?
              <button className="button-footer">
                <div className="left-content-button-footer">LETS CONNECT</div>
                <div className="right-content-button-footer">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
