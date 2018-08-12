import React from "react";
import Input from "./../inputs/input";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s from "./inputbox.scss";

var counter;
function InputBox(props) {
  var { id, label, loading, ref, ...iprops } = props;
  id = id || `sitcontrolbox${++counter}`;
  return (
    <div className={s.sitbox}>
      <label htmlFor={id || this.id}>
        {loading && <FontAwesomeIcon className="fa-pulse" icon="spinner" />}
        {loading && " "}
        {label}
      </label>
      <Input ref={ref} id={id || this.id} {...iprops} />
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
