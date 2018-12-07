import React from "react";
import ReactDOM from "react-dom";
import s from "./modal.scss";

const modalRoot = document.getElementById("modal-root");

export default function Modal(props) {
  const show = props.show === undefined || props.show === true;
  var content = props.content;
  var buttons = props.buttons;
  React.Children.map(props.children, child => {
    if (child.type === ModalContent) content = child;
    else if (child.type === ModalButtons) buttons = child;
  });
  const modal = (
    <div className={s.modal} style={{ display: show ? "flex" : "none" }}>
      <div className={s.box} style={{ width: props.width || "auto", height: props.height || "auto" }}>
        <div className={s.header}>{props.title || "Modal"}</div>
        <div className={s.content}>{content.props.children}</div>
        <div className={s.footer}>{buttons.props.children}</div>
      </div>
    </div>
  );
  if (modalRoot === null) return modal;
  else return ReactDOM.createPortal(modal, modalRoot);
}

export function ModalContent() {}
export function ModalButtons() {}
