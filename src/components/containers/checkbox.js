import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import s from "./checkbox.scss";

var counter = 0;
class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: props.defaultChecked };
    this.id = props.id || `sitcheckbox${++counter}`;
  }
  get checked() {
    return this.state.checked;
  }
  set checked(val) {
    this.setState({ checked: val });
  }
  changeHandler = e => {
    const oldChecked = this.state.checked;
    const newChecked = !oldChecked;
    if (this.props.readOnly) this.setState({ checked: oldChecked });
    else {
      this.setState({ checked: newChecked }, () => {
        if (this.props.onChange) this.props.onChange({ target: this, oldChecked, newChecked });
      });
    }
  };
  render() {
    var { label, readOnly, disabled, checked, defaultChecked, checkColor, ...xprops } = this.props;
    checked = this.state.checked;
    return (
      <div className={cx(s.sitcheck, readOnly || disabled ? s.disabled : undefined)}>
        <FontAwesomeIcon icon={{ prefix: checked ? "fas" : "far", iconName: checked ? "check-circle" : "circle" }} className={s.siticon} />
        <input type="checkbox" onChange={this.changeHandler} id={this.id} checked={this.state.checked} {...xprops} />
        <label className="custom-control-label" htmlFor={this.id}>
          {label}
        </label>
      </div>
    );
  }
}

CheckBox.defaultProps = {
  defaultChecked: false,
  readOnly: false
};
CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  readOnly: PropTypes.bool
};

export default CheckBox;
