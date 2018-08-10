import React from "react";
import cx from "classnames";
import s from "./datepicker.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.today = new Date();
    this.monthslang = {
      en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    };
    this.daysofweeklang = {
      en: ["S", "M", "T", "W", "T", "F", "S"],
      es: ["D", "L", "M", "M", "J", "V", "S"]
    };
    this.days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var lang = props.lang || navigator.language || navigator.userLanguage || "en";
    if (lang.length > 2) lang = lang.substring(0, 2);
    this.months = this.monthslang[lang];
    this.daysofweek = this.daysofweeklang[lang];
    this.state = {
      year: props.defaultYear || this.today.getFullYear(),
      month: props.defaultMonth || this.today.getMonth() + 1,
      day: props.defaultDay || this.today.getDay() + 1,
      show: false,
      selectionYear: 0,
      selectionMonth: 0,
      index: 0
    };
    if (props.defaultValue) {
      this.state.year = Number(props.defaultValue.substring(0, 4));
      this.state.month = Number(props.defaultValue.substring(5, 7));
      this.state.day = Number(props.defaultValue.substring(8, 10));
    }
    if (props.onChange) this.onChange = props.onChange;
  }
  render() {
    var style = { width: this.props.width };
    Object.assign(style, this.props.style);
    return (
      <div className={s.datepicker} style={style}>
        <FontAwesomeIcon className={cx(s.caret, s.left)} icon="caret-left" onClick={e => this.plusDay(-1)} />
        <FontAwesomeIcon className={s.calendar} icon="calendar-alt" onClick={this.show} />
        <input className={s.sitcontrol} ref={this.setInput} name={this.props.name} value={this.value} onChange={this.changeHandler} onKeyDown={this.keyHandler} onClick={this.changeHandler} />
        <FontAwesomeIcon className={cx(s.caret, s.right)} icon="caret-right" onClick={e => this.plusDay(1)} />
        {this.state.show &&
          this.state.index === 0 && (
            <div className={cx(s.picker, s.byday)}>
              <div>
                <FontAwesomeIcon className={cx(s.angle, s.left)} icon="angle-left" onClick={e => this.plusMonth(-1)} />
                <span onClick={this.showMonths}>{this.months[this.state.selectionMonth - 1] + " " + this.state.selectionYear}</span>
                <FontAwesomeIcon className={cx(s.angle, s.right)} icon="angle-right" onClick={e => this.plusMonth(1)} />
              </div>
              <ul onClick={this.selectValue}>
                {this.renderDaysList()}
                <br style={{ clear: "both" }} />
              </ul>
            </div>
          )}
        {this.state.show &&
          this.state.index === 1 && (
            <div className={cx(s.picker, s.bymonth)}>
              <div>
                <FontAwesomeIcon className={cx(s.angle, s.left)} icon="angle-left" onClick={e => this.plusYear(-1)} />
                {this.state.selectionYear}
                <FontAwesomeIcon className={cx(s.angle, s.right)} icon="angle-right" onClick={e => this.plusYear(1)} />
              </div>
              <ul onClick={this.selectValue}>
                {this.months.map((y, i) => (
                  <li className={this.state.month === i + 1 && this.state.selectionYear === this.state.year ? s.selected : undefined} data-value={i + 1} key={i}>
                    {y.substring(0, 3)}
                  </li>
                ))}
                <br style={{ clear: "both" }} />
              </ul>
            </div>
          )}
      </div>
    );
  }
  componentDidUpdate() {
    if (this.oldValue !== this.value) {
      this.onChange({ target: this, oldValue: this.oldValue, newValue: this.value });
      this.oldValue = this.value;
    }
    if (this.input !== document.activeElement) {
      this.selectionMode = 0;
      return;
    }
    setTimeout(() => {
      const s = this.input.selectionStart;
      if (s >= 0 && s <= 4) this.selectionMode = 1;
      else if (s >= 5 && s <= 7) this.selectionMode = 2;
      else if (s >= 8 && s <= 10) this.selectionMode = 3;
      this.selectText();
    }, 100);
  }
  set day(day) {
    if (day < 1 || day > this.days[this.state.month]) return;
    this.setState({ day });
  }
  get day() {
    return this.state.day;
  }
  get dayStr() {
    return (this.state.day < 10 ? "0" : "") + this.state.day;
  }
  get dayOfWeek() {
    return this.calculateDayOfWeek(this.state.year, this.state.month, this.state.day);
  }
  get month() {
    return this.state.month;
  }
  get monthStr() {
    return (this.state.month < 10 ? "0" : "") + this.state.month;
  }
  set month(month) {
    if (month < 1 || month > 12) return;
    this.setState({ month, show: false });
  }
  get year() {
    return this.state.year;
  }
  set year(year) {
    this.setState({ year, show: false });
  }
  get value() {
    return this.year + "-" + this.monthStr + "-" + this.dayStr;
  }
  set value(date) {
    var y = date.substring(0, 4);
    var m = date.substring(5, 7);
    var d = date.substring(8, 10);
    this.setState({ year: Number(y), month: Number(m), day: Number(d) });
  }
  setInput = o => (this.input = o);
  changeHandler = e => this.setState({ value: this.value });
  keyHandler = e => {
    const key = e.keyCode;
    e.preventDefault();
    if (key === 37 && this.selectionMode > 1) this.selectionMode--;
    else if (key === 39 && this.selectionMode < 3) this.selectionMode++;
    else if (key === 38 && this.selectionMode === 1) this.year++;
    else if (key === 38 && this.selectionMode === 2) this.month++;
    else if (key === 38 && this.selectionMode === 3) this.day++;
    else if (key === 40 && this.selectionMode === 1) this.year--;
    else if (key === 40 && this.selectionMode === 2) this.month--;
    else if (key === 40 && this.selectionMode === 3) this.day--;
    else if (key >= 96 && key <= 105) {
      if (key >= 96 && key <= 98 && this.month === 1 && this.selectionMode === 2) this.month = key - 86;
      else if (key >= 96 && key <= 97 && this.selectionMode === 2) this.month = 1;
      else if (key > 97 && this.selectionMode === 2) this.month = key - 96;
      else if (key >= 96 && this.day === 1 && this.selectionMode === 3) this.day = key - 86;
      else if (key >= 96 && this.day === 2 && this.selectionMode === 3) this.day = key - 76;
      else if (key >= 96 && this.day === 3 && this.selectionMode === 3) this.day = Math.min(key - 66, this.days[this.month]);
      else if (key >= 97 && this.selectionMode === 3) this.day = key - 96;
    }
    setTimeout(this.selectText, 100);
  };
  selectText = () => {
    if (this.selectionMode === 1) {
      this.input.selectionStart = 0;
      this.input.selectionEnd = 4;
    } else if (this.selectionMode === 2) {
      this.input.selectionStart = 5;
      this.input.selectionEnd = 7;
    } else if (this.selectionMode === 3) {
      this.input.selectionStart = 8;
      this.input.selectionEnd = 10;
    }
  };
  calculateDayOfWeek(y, m, d) {
    const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    y -= m < 3;
    return (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + t[m - 1] + d) % 7;
  }
  show = e => {
    this.setState({ show: !this.state.show, selectionYear: this.state.year, selectionMonth: this.state.month, index: 0 });
  };
  showMonths = e => {
    this.setState({ index: 1 });
  };
  plusYear(n) {
    this.setState({ selectionYear: this.state.selectionYear + n });
  }
  plusMonth(n) {
    var month = this.state.selectionMonth + n;
    var year = this.state.selectionYear;
    if (month <= 0) {
      month = 12;
      year--;
    }
    if (month >= 13) {
      month = 1;
      year++;
    }
    this.setState({ selectionYear: year, selectionMonth: month });
  }
  plusDay(n) {
    var day = this.state.day + n;
    var month = this.state.month;
    var year = this.state.year;
    if (day <= 0) {
      month--;
      if (month === 0) {
        month = 12;
        year--;
      }
      day = this.days[month];
    }
    if (day > this.days[month]) {
      day = 1;
      month++;
      if (month > 12) {
        month = 1;
        year++;
      }
    }
    this.setState({ year, month, day, selectionYear: year, selectionMonth: month });
  }
  renderDaysList = () => {
    const firstday = this.calculateDayOfWeek(this.state.selectionYear, this.state.selectionMonth, 1);
    var list = [];
    for (let i = 0; i < this.daysofweek.length; i++) {
      list.push(
        <li className={s.header} key={i}>
          {this.daysofweek[i]}
        </li>
      );
    }
    for (let i = 1; i <= firstday; i++) {
      list.push(<li key={7 + i} />);
    }
    for (let i = 1; i <= this.days[this.state.selectionMonth]; i++) {
      let selected = this.state.year === this.state.selectionYear && this.state.month === this.state.selectionMonth && this.state.day === i;
      let today = this.state.selectionYear === this.today.getFullYear() && this.state.selectionMonth === this.today.getMonth() + 1 && this.today.getDate() === i;
      list.push(
        <li className={cx(selected && s.selected, today && s.today)} key={14 + i} data-value={i}>
          {i}
        </li>
      );
    }
    return list;
  };
  selectValue = e => {
    if (e.target.nodeName !== "LI") return;
    const value = e.target.dataset.value;
    if (value === undefined) return;
    if (this.state.index === 0) {
      this.setState({ show: false, year: this.state.selectionYear, month: this.state.selectionMonth, day: Number(value) });
    } else if (this.state.index === 1) {
      this.setState({ index: 0, selectionMonth: Number(value) });
    }
  };
}

DatePicker.defaultProps = {
  style: {},
  onChange: () => {}
};

DatePicker.propType = {
  value: PropTypes.string,
  onChange: PropTypes.func
};
