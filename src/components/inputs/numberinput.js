import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from "./input.scss";

var counter = 0;
export default class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    var value = props.defaultValue;
    if (typeof value !== "number") {
      value = Number(value);
      if (isNaN(value)) {
        console.warn("NotaNumber: %s", value);
        value = 0;
      }
    }
    this.state = { value };
    this.id = `sitnuminp${++counter}`;
  }
  get value() {
    return this.state.value;
  }
  set value(val) {
    this.setState({ value: val });
  }
  get text() {
    return this.state.focused ? this.state.text : this.props.prefix + this.formatNumber(this.state.value, this.props.decimals) + this.props.suffix;
  }
  formatNumber = (number, n, x) => {
    var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
    return number.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
  };
  parseString(str) {
    var parts = str.split(".");
    if (str === "" || str === "-") return str;
    else if (this.props.decimals === 0 || parts.length === 1) return this.formatNumber(Number(parts[0]));
    else if (parts[1] === "") return this.formatNumber(Number(parts[0])) + ".";
    else {
      if (parts[1].length > this.props.decimals) parts[1] = parts[1].substring(0, this.props.decimals);
      return this.formatNumber(Number(parts[0])) + "." + parts[1];
    }
  }
  changeHandler = e => {
    const oldValue = this.state.value;
    const val1 = e.target.value;
    var newValue = val1.replace(/[^0-9.]/g, "");
    if (val1.charAt(0) === "-") newValue = "-" + newValue;
    this.setState({ value: Number(newValue), text: this.parseString(newValue) }, () => {
      if (this.props.onChange !== undefined && oldValue !== newValue) {
        this.props.onChange({ target: this, oldValue, newValue });
      }
    });
  };
  focused = e => {
    e.persist();
    const decimals = this.state.value % 1 === 0 ? 0 : this.props.decimals;
    this.setState({ focused: true, text: this.formatNumber(this.state.value, decimals) }, () => {
      this.input.select();
      if (this.props.onFocus) this.props.onFocus({ target: this, event: e });
    });
  };
  blurred = e => {
    e.persist();
    var text = this.state.text;
    text = text.replace(/[^0-9.]/g, "");
    if (this.state.text.charAt(0) === "-") text = "-" + text;
    this.setState({ focused: false, value: Number(text) }, () => {
      if (this.props.onBlur) this.props.onBlur({ target: this, event: e });
    });
  };
  render() {
    var { id, value, defaultValue, onChange, onFocus, onBlur, accept, ...xprops } = this.props;
    if (value !== undefined) {
      if (typeof value !== "number") value = Number(value);
      if (isNaN(value)) {
        console.warn("NotaNumber: %s", value);
        value = 0;
      }
      this.state.value = value;
    }
    return (
      <input
        ref={o => (this.input = o)}
        className={cx(s.sitcontrol, s.ralign)}
        id={id || this.id}
        value={this.text}
        onChange={this.changeHandler}
        onFocus={this.focused}
        onBlur={this.blurred}
        {...xprops}
      />
    );
  }
}

NumberInput.defaultProps = {
  defaultValue: 0,
  prefix: "",
  suffix: "",
  decimals: 0,
  onChange: () => {}
};
NumberInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  decimals: PropTypes.number,
  onChange: PropTypes.func
};
