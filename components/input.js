import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

var input_counter = 0;
export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.defaultValue };
    this.id = `sitcontrol${++input_counter}`;
    this.onChange = props.onChange;
  }
  get value() {
    return this.state.value;
  }
  set value(val) {
    this.setState({ value: val });
  }
  changeHandler = e => {
    var val = e.target.value;
    if (this.props.format === "uppercase") val = val.toUpperCase();
    else if (this.props.format === "lowercase") val = val.toLowerCase();
    if (this.props.accept !== undefined) {
      var re = new RegExp("^" + this.props.accept + "$");
      val = re.test(val) ? val : this.state.value;
    }
    if (val !== this.state.value) this.onChange(e, val);
    this.value = val;
  };
  render() {
    var { id, value, defaultValue, onChange, accept, ...inputprops } = this.props;
    id = id || `sitinp${++input_counter}`;
    return <input className="sitcontrol" id={id} value={this.state.value} onChange={this.changeHandler} {...inputprops} />;
  }
  static getDerivedStateFromProps(props, state) {
    const newstate = {};
    if (props.value !== undefined && state.value !== props.value) newstate.value = props.value;
    return newstate;
  }
}

Input.defaultProps = {
  defaultValue: "",
  onChange: () => {}
};
Input.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  accept: PropTypes.string,
  format: PropTypes.string,
  onChange: PropTypes.func
};
