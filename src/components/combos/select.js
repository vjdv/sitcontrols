import React from "react";
import PropTypes from "prop-types";
import s from "./../inputs/input.scss";

var select_counter = 0;

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.defaultValue };
    this.valueFunc = o => o[props.valueField];
    this.labelFunc = o => o[props.labelField];
    if (props.valueFunc) this.valueFunc = props.valueFunc;
    if (props.labelFunc) this.labelFunc = props.labelFunc;
    this.select = null;
    this.onChange = props.onChange;
    this.id = `sitselect${++select_counter}`;
  }
  get value() {
    return this.select.value;
  }
  set value(val) {
    this.setState({ value: val });
  }
  get selectedItem() {
    var x = this.options.filter(o => this.valueFunc(o) === this.state.value);
    if (x.length === 0) return this.options[0];
    else return x[0];
  }
  set selectedItem(obj) {
    this.value = obj[this.valueField];
  }
  changeHandler = e => {
    var oldValue = this.state.value;
    var newValue = this.readOnly ? oldValue : e.target.value;
    this.setState({ value: newValue }, this.changeTrigger(oldValue, newValue));
  };
  changeTrigger(oldValue, newValue) {
    if (this.onChange !== undefined && oldValue !== newValue) this.onChange({ target: this, oldValue, newValue });
  }
  render() {
    var { id, options, defaultValue, value, readOnly, className, labelField, valueField, labelFunc, valueFunc, onChange, style, width, ...newprops } = this.props;
    style = { width, ...style };
    this.readOnly = readOnly;
    this.options = options;
    this.onChange = onChange;
    id = id || this.id;
    value = this.props.value === undefined ? this.state.value : this.props.value;
    return (
      <select ref={s => (this.select = s)} id={id} className={className || s.sitcontrol} value={value} readOnly={readOnly} style={style} onChange={this.changeHandler} {...newprops}>
        {options.map((o, i) => {
          var val = this.valueFunc(o, i);
          return (
            <option value={val} key={val} data-index={i}>
              {this.labelFunc(o, i)}
            </option>
          );
        })}
        {this.props.children}
      </select>
    );
  }
}

Select.defaultProps = {
  defaultValue: "",
  readOnly: false,
  labelField: "label",
  valueField: "value",
  onChange: () => {},
  style: {},
  options: []
};
Select.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  labelField: PropTypes.string,
  valueField: PropTypes.string,
  labelFunc: PropTypes.func,
  valueFunc: PropTypes.func,
  style: PropTypes.object
};

export default Select;
