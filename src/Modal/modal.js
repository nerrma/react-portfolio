import React from "react";
import "./modal.css";

var Modal = props => {
  return (
    <div className="modal">
      <h2 className="modal_content">{props.title}</h2>
      <p className="modal_content">{props.info}</p>
      <i className="exitBtn fa fa-close" onClick={props.cancel} />
    </div>
  );
};

export default Modal;
