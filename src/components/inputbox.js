import React from "react";
import Input from "./input";
import PropTypes from "prop-types";
import "./inputbox.scss";

var inputbox_counter;
function InputBox(props) {
  var { id, label, loading, ref, ...iprops } = props;
  id = id || `sitcontrol${++inputbox_counter}`;
  return (
    <div className="sitcontrolbox">
      <label htmlFor={id || this.id}>
        {label}
        {loading && <span className="icon-spin5 animate-spin" />}
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

export default InputBox;
