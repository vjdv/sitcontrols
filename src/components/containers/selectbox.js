import React from "react";
import Select from "./../combos/select";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import s from "./inputbox.scss";

var counter;
function SelectBox(props) {
  var { id, label, loading, className, ref, ...sprops } = props;
  id = id || `sitselectbox${++counter}`;
  return (
    <div className={cx(s.sitbox, className)}>
      <label htmlFor={id}>
        {loading && <FontAwesomeIcon icon="spinner" pulse />}
        {loading && " "}
        {label}
      </label>
      <Select ref={ref} id={id} {...sprops} />
    </div>
  );
}

SelectBox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  loading: PropTypes.bool
};

SelectBox.defaultProps = {
  loading: false
};

export default SelectBox;
