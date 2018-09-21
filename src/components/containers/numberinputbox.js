import React from "react";
import NumberInput from "./../inputs/numberinput";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import s from "./inputbox.scss";

var counter = 0;
function NumberInputBox(props) {
  var { id, label, loading, ref, ...iprops } = props;
  id = id || `sitcontrolbox${++counter}`;
  return (
    <div className={cx(s.sitbox)}>
      <label htmlFor={id || this.id}>
        {loading && <FontAwesomeIcon className="fa-pulse" icon="spinner" />}
        {loading && " "}
        {label}
      </label>
      <NumberInput ref={ref} id={id || this.id} {...iprops} />
    </div>
  );
}

NumberInputBox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  loading: PropTypes.bool
};

NumberInputBox.defaultProps = {
  loading: false
};

export default NumberInputBox;
