import React from "react";
import cx from "classnames";
import s1 from "./input.scss";
import s2 from "./inputoption.scss";
import { List } from "react-virtualized";

export default class InputOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      showList: false,
      text: "",
      filteredOptions: [],
      pickedIndex: 1
    };
    this.labelField = props.labelField || "label";
    this.valueField = props.valueField || "value";
    this.onChange = props.onChange;
  }
  render() {
    const parentStyle = { width: this.props.width, ...this.props.style };
    return (
      <div className={s2.inputoption} style={parentStyle}>
        <input
          type="search"
          ref={o => (this.input = o)}
          className={cx(s1.sitcontrol, this.state.value === "" && s2.nochoiced)}
          value={this.text}
          onChange={this.changeHandler}
          onKeyDown={this.keyHandler}
          onFocus={this.focusHandler}
          onBlur={this.blurHandler}
        />
        {this.props.name !== undefined && <input type="hidden" name={this.props.name} value={this.value} />}
        {this.state.showList && (
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
    return this.state.value;
  }
  set value(val) {
    if (this.props.value !== undefined) return console.warn("value already set in props");
    var item = null;
    for (var i = 0; i < this.props.options.length; i++) {
      if (this.props.options[i][props.valueField] === val) {
        item = this.props.options[i];
        break;
      }
    }
    this.setState({ value: item === null ? "" : item[this.props.valueField], text: item === null ? "" : item[this.props.labelField] });
  }
  get text() {
    const item = this.selectedItem;
    return this.state.focused ? this.state.text : item === null ? "" : item[this.props.labelField];
  }
  get selectedItem() {
    const index = this.selectedIndex;
    return index === -1 ? null : this.props.options[index];
  }
  get selectedIndex() {
    for (var i = 0; i < this.props.options.length; i++) {
      if (this.props.options[i][this.props.valueField] === this.state.value) return i;
    }
    return -1;
  }
  static getDerivedStateFromProps(props, state) {
    const newstate = {};
    if (props.value !== undefined) {
      var item = null;
      for (var i = 0; i < props.options.length; i++) {
        if (props.options[i][props.valueField] === props.value) {
          item = props.options[i];
          break;
        }
      }
      state.value = item === null ? "" : props.value;
    }
    return newstate;
  }
  changeHandler = e => {
    const text = e.target.value;
    this.setState({ text, showList: true, pickedIndex: 0 }, this.filterOptions);
  };
  changeTester = (oldValue, newValue) => {
    if (this.props.onChange !== undefined && oldValue !== newValue) this.props.onChange({ target: this, oldValue, newValue });
  };
  clickHandler = e => {
    const oldValue = this.state.value;
    const newIndex = Number(e.target.dataset.index);
    const newValue = this.state.filteredOptions[newIndex][this.props.valueField];
    this.setState({ value: newValue }, () => this.changeTester(oldValue, newValue));
  };
  filterOptions = () => {
    const item = this.selectedItem;
    const showAll = this.state.text === "" || this.state.text === item[this.props.labelField];
    const textLowered = this.state.text.toLowerCase();
    const filteredOptions = this.props.options.filter(o => showAll || o[this.labelField].toLowerCase().indexOf(textLowered) !== -1);
    this.setState({ filteredOptions });
  };
  hideOptions = () => setTimeout(() => this.setState({ showList: false }), 200);
  keyHandler = e => {
    const key = e.keyCode;
    if (key === 13 || key === 38 || key === 40) {
      e.preventDefault();
      if (this.state.filteredOptions.length === 0) return;
      if ((key === 38 || key === 40) && this.state.showList === false) {
        this.focusHandler();
      } else if (key === 40 && this.state.pickedIndex + 1 < this.state.filteredOptions.length) {
        this.setState({ pickedIndex: this.state.pickedIndex + 1 });
      } else if (this.state.pickedIndex === -1 && key === 38) {
        this.setState({ pickedIndex: this.state.filteredOptions.length - 1, showList: true });
      } else if (key === 38 && this.state.pickedIndex > 0) {
        this.setState({ pickedIndex: this.state.pickedIndex - 1 });
      } else if (key === 13 && this.state.showList) {
        const oldValue = this.state.value;
        const newItem = this.state.filteredOptions[this.state.pickedIndex];
        const newValue = newItem[this.props.valueField];
        this.setState({ text: newItem[this.props.labelField], value: newValue, showList: false }, () => this.changeTester(oldValue, newValue));
      }
    }
  };
  focusHandler = () => {
    const index = this.selectedIndex;
    const pickedIndex = index || 0;
    const text = index === -1 ? "" : this.props.options[index][this.props.labelField];
    this.setState({ focused: true, showList: true, pickedIndex, text }, () => {
      this.input.select();
      this.filterOptions();
    });
  };
  blurHandler = () => {
    this.setState({ focused: false, text: "" }, this.hideOptions);
  };
  renderListItem = ({ index, key, style }) => {
    const o = this.state.filteredOptions[index];
    const picked = this.state.pickedIndex === index;
    const selected = this.state.value === o[this.props.valueField];
    return (
      <div className={cx(s2.item, picked && s2.picked, selected && s2.selected)} data-index={index} key={key} style={style} onClick={this.clickHandler}>
        {o[this.labelField]}
      </div>
    );
  };
}
