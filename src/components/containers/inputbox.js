import React from "react";
import Input from "./../inputs/input";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import s from "./inputbox.scss";

var counter = 0;
function InputBox(props) {
  var { id, label, loading, xref, ...iprops } = props;
  id = id || `sitcontrolbox${++counter}`;
  return (
    <div className={cx(s.sitbox)}>
      <label htmlFor={id || this.id}>
        {loading && <FontAwesomeIcon className="fa-pulse" icon="spinner" />}
        {loading && " "}
        {label}
      </label>
      <Input ref={xref} id={id || this.id} {...iprops} />
    </div>
  );
}

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  loading: PropTypes.bool
};

InputBox.defaultProps = {
  loading: false
};

export default InputBox;
