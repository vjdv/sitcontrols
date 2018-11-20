import React from "react";
import cx from "classnames";
import s1 from "./input.scss";
import s2 from "./inputoption.scss";
import { List } from "react-virtualized";

export default class InputOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      text: "",
      filteredOptions: [],
      selectedIndex: -1,
      pickedIndex: 1
    };
    this.labelField = props.labelField || "label";
    this.valueField = props.valueField || "value";
    this.onChange = props.onChange;
  }
  render() {
    const parentStyle = { width: this.props.width, ...this.props.style };
    const inputStyle = { color: this.selectedIndex === -1 ? "#888" : undefined };
    return (
      <div className={cx(s2.inputoption, this.state.selectedIndex !== -1 && s2.choiced)} style={parentStyle}>
        <input
          type="search"
          className={s1.sitcontrol}
          style={inputStyle}
          value={this.text}
          onChange={this.changeHandler}
          onKeyDown={this.keyHandler}
          onFocus={this.showOptions}
          onBlur={this.hideOptions}
        />
        <input type="hidden" name={this.props.name} value={this.value} />
        {this.state.show && (
          <List
            className={s2.list}
            width={this.props.width || 300}
            height={200}
            rowHeight={30}
            rowRenderer={this.renderListItem}
            rowCount={this.state.filteredOptions.length}
            scrollToIndex={this.state.pickedIndex}
          />
        )}
      </div>
    );
  }
  get value() {
    return this.state.selectedIndex === -1 ? "" : this.selectedItem[this.valueField] || "";
  }
  set value(val) {
    const findings = this.props.options.filter(o => o[this.valueField] === val);
    if (findings.length === 0) this.setState({ selectedIndex: -1 });
    else this.setState({ text: findings[0][this.labelField], value: val });
  }
  get text() {
    return this.state.selectedIndex === -1 ? this.state.text : this.selectedItem[this.labelField];
  }
  get selectedItem() {
    return this.props.options[this.state.selectedIndex] || null;
  }
  set selectedItem(item) {
    const index = this.props.options.indexOf(item);
    this.setState({ selectedIndex: index });
  }
  get selectedIndex() {
    return this.state.selectedIndex;
  }
  set selectedIndex(index) {
    this.setState({ selectedIndex: index });
  }
  changeHandler = e => {
    const text = e.target.value;
    var selectedIndex = text === this.text ? this.state.selectedIndex : -1;
    this.setState({ text, selectedIndex }, this.filterOptions);
  };
  changeChecker = prevValue => {
    if (this.onChange && prevValue !== this.value) this.onChange({ target: this, oldValue: prevValue, newValue: this.value });
  };
  clickHandler = e => {
    const previous = this.state.selectedIndex;
    this.setState({ selectedIndex: Number(e.target.dataset.index) }, () => this.changeChecker(previous));
  };
  filterOptions = () => {
    var filteredOptions = this.props.options.filter((o, i) => {
      o.sit_fid = i;
      return this.state.text === "" || o[this.labelField].toLowerCase().indexOf(this.state.text.toLowerCase()) !== -1;
    });
    const previous = this.state.selectedIndex;
    this.setState({ filteredOptions, show: true, value: "" }, () => this.changeChecker(previous));
  };
  hideOptions = () => {
    setTimeout(() => this.setState({ show: false, text: "" }), 150);
  };
  keyHandler = e => {
    const key = e.keyCode;
    if (key === 13 || key === 38 || key === 40) {
      e.preventDefault();
      if (this.state.filteredOptions.length === 0) return;
      if (key === 40 && this.state.pickedIndex + 1 < this.state.filteredOptions.length) {
        this.setState({ pickedIndex: this.state.pickedIndex + 1 });
      } else if (this.state.pickedIndex === -1 && key === 38) {
        this.setState({ pickedIndex: this.state.filteredOptions.length - 1, show: true });
      } else if (key === 38 && this.state.pickedIndex > 0) {
        this.setState({ pickedIndex: this.state.pickedIndex - 1 });
      } else if (key === 13 && this.state.show) {
        const obj = this.state.filteredOptions[this.state.pickedIndex];
        const prevValue = this.value;
        this.setState({ text: obj[this.labelField], selectedIndex: obj.sit_fid, value: obj[this.valueField], show: false }, () => this.changeChecker(prevValue));
      }
    }
  };
  showOptions = () => {
    const pickedIndex = this.state.selectedIndex === -1 ? 0 : this.state.selectedIndex;
    this.setState({ show: true, pickedIndex }, this.filterOptions);
  };
  renderListItem = ({ index, key, style }) => {
    const o = this.state.filteredOptions[index];
    const picked = this.state.pickedIndex === index;
    const selected = this.state.selectedIndex === o.sit_fid;
    return (
      <div className={cx(s2.item, picked && s2.picked, selected && s2.selected)} data-index={o.sit_fid} key={key} style={style} onClick={this.clickHandler}>
        {o[this.labelField]}
      </div>
    );
  };
}
