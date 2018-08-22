import React from "react";
import cx from "classnames";
import s1 from "./input.scss";
import s2 from "./inputoption.scss";

export default class InputOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: props.defaultValue || "",
      text: "",
      options: [],
      filteredOptions: []
    };
    this.labelField = props.labelField || "label";
    this.valueField = props.valueField || "value";
    this.maxVisibleOptions = props.maxVisibleOptions || 5;
    this.onChange = props.onChange;
  }
  render() {
    var style = { width: this.props.width };
    Object.assign(style, this.props.style || {});
    return (
      <div className={cx(s2.inputoption, this.state.value === "" && s2.choiced)} style={style}>
        <input type="search" className={s1.sitcontrol} value={this.state.text} onChange={this.changeHandler} onKeyDown={this.keyHandler} onFocus={this.showOptions} onBlur={this.hideOptions} />
        <input type="hidden" name={this.props.name} value={this.state.value} />
        {this.state.show && (
          <div onMouseMove={this.mouseHandler} onClick={this.clickHandler}>
            {this.state.filteredOptions.length === 0 ? (
              <span>Sin coincidencias</span>
            ) : (
              this.state.filteredOptions.filter((o, i) => i >= this.state.from && i < this.state.from + this.maxVisibleOptions).map((o, i) => (
                <div className={cx(o.sit_fid === this.state.selectedIndex && s2.selected)} data-index={o.sit_fid} key={i}>
                  {o[this.labelField]}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    );
  }
  static getDerivedStateFromProps(props, state) {
    const newstate = {};
    if (props.options !== undefined && state.options !== props.options) {
      newstate.options = props.options || [];
      newstate.selectedIndex = -1;
    }
    return newstate;
  }
  get value() {
    return this.state.value;
  }
  set value(val) {
    const findings = this.state.options.filter(o => o[this.valueField] === val);
    if (findings.length === 0) this.setState({ text: "", value: "" });
    else this.setState({ text: findings[0][this.labelField], value: val });
  }
  get text() {
    return this.state.text;
  }
  get selectedItem() {
    const findings = this.state.options.filter(o => o[this.valueField] === this.state.value);
    if (findings.length === 0) return null;
    else return findings[0];
  }
  set selectedItem(item) {
    const findings = this.state.options.filter(o => o === item);
    if (findings.length === 0) this.setState({ text: "", value: "" });
    else this.setState({ text: findings[0][this.labelField], value: findings[0][this.valueField] });
  }
  changeHandler = e => {
    const text = e.target.value;
    this.setState({ text, value: "" }, this.filterOptions);
  };
  changeChecker = prevValue => {
    if (this.onChange && prevValue !== this.value) this.onChange({ target: this, oldValue: prevValue, newValue: this.value });
  };
  clickHandler = e => {
    if (e.target.nodeName !== "DIV") return;
    const prevValue = this.value;
    const obj = this.state.filteredOptions[Number(e.target.dataset.index)];
    this.setState({ text: obj[this.labelField], value: obj[this.valueField] }, () => this.changeChecker(prevValue));
  };
  filterOptions = () => {
    if (this.state.text === "") var filteredOptions = this.state.options.map(o => o);
    else var filteredOptions = this.state.options.filter(o => o[this.labelField].toLowerCase().indexOf(this.state.text.toLowerCase()) !== -1);
    filteredOptions.forEach((o, i) => (o.sit_fid = i));
    const prevValue = this.state.value;
    this.setState({ filteredOptions, from: 0, show: true, value: "" }, () => this.changeChecker(prevValue));
  };
  hideOptions = () => {
    setTimeout(() => this.setState({ show: false, selectedIndex: -1 }), 150);
  };
  keyHandler = e => {
    const key = e.keyCode;
    if (key === 13 || key === 38 || key === 40) {
      e.preventDefault();
      if (this.state.filteredOptions.length === 0) return;
      if (this.state.selectedIndex === -1 && key === 40) {
        this.setState({ selectedIndex: 0, show: true });
      } else if (key === 40 && this.state.selectedIndex + 1 < this.state.filteredOptions.length) {
        this.setState({ selectedIndex: this.state.selectedIndex + 1 });
      } else if (this.state.selectedIndex === -1 && key === 38) {
        this.setState({ selectedIndex: this.state.filteredOptions.length - 1, show: true });
      } else if (key === 38 && this.state.selectedIndex > 0) {
        this.setState({ selectedIndex: this.state.selectedIndex - 1 });
      } else if (key === 13 && this.state.show) {
        const obj = this.state.filteredOptions[this.state.selectedIndex];
        const prevValue = this.value;
        this.setState({ text: obj[this.labelField], selectedIndex: -1, value: obj[this.valueField], show: false }, () => this.changeChecker(prevValue));
      }
    }
  };
  mouseHandler = e => {
    var sindex = e.target.dataset.index;
    if (sindex === undefined) return;
    this.setState({ selectedIndex: Number(sindex) });
  };
  showOptions = () => {
    this.setState({ show: true }, this.filterOptions);
  };
}
