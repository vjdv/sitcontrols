import React from "react";
import "./datepicker.scss";

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
    this.onChange = () => {};
    if (props.onChange) this.onChange = props.onChange;
  }
  render() {
    var style = { width: this.props.width };
    Object.assign(style, this.props.style);
    return (
      <div className="datepicker" style={style}>
        <span className="icon-left-dir" onClick={e => this.plusDay(-1)} />
        <span className="icon-calendar" onClick={this.show} />
        <span onClick={this.show}>{this.value}</span>
        <span className="icon-right-dir" onClick={e => this.plusDay(1)} />
        <input type="hidden" name={this.props.name} value={this.value} />
        {this.state.show &&
          this.state.index === 0 && (
            <div className="picker byday">
              <div>
                <i className="icon-left-open left" onClick={e => this.plusMonth(-1)} />
                <span onClick={this.showMonths}>{this.months[this.state.selectionMonth - 1] + " " + this.state.selectionYear}</span>
                <i className="icon-right-open right" onClick={e => this.plusMonth(1)} />
              </div>
              <ul onClick={this.selectValue}>
                {this.renderDaysList()}
                <br style={{ clear: "both" }} />
              </ul>
            </div>
          )}
        {this.state.show &&
          this.state.index === 1 && (
            <div className="picker bymonth">
              <div>
                <i className="icon-left-open left" onClick={e => this.plusYear(-1)} />
                {this.state.selectionYear}
                <i className="icon-right-open right" onClick={e => this.plusYear(1)} />
              </div>
              <ul onClick={this.selectValue}>
                {this.months.map((y, i) => (
                  <li className={this.state.month === i + 1 && this.state.selectionYear === this.state.year ? "selected" : undefined} data-value={i + 1} key={i}>
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
  set day(day) {
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
    this.setState({ month });
  }
  get year() {
    return this.state.year;
  }
  set year(year) {
    this.setState({ year });
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
    this.setState({ year, month, day, selectionYear: year, selectionMonth: month }, () => this.onChange({ target: this, value: this.value }));
  }
  renderDaysList = () => {
    const firstday = this.calculateDayOfWeek(this.state.selectionYear, this.state.selectionMonth, 1);
    var list = [];
    for (let i = 0; i < this.daysofweek.length; i++) {
      list.push(
        <li className="header" key={i}>
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
      let classes = [selected ? "selected" : "", today ? "today" : ""];
      list.push(
        <li className={classes.join(" ")} key={14 + i} data-value={i}>
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
      this.setState({ show: false, year: this.state.selectionYear, month: this.state.selectionMonth, day: Number(value) }, () => {
        if (this.onChange) this.onChange({ target: this, value: this.value });
      });
    } else if (this.state.index === 1) {
      this.setState({ index: 0, selectionMonth: Number(value) });
    }
  };
}

DatePicker.defaultProps = {
  style: {}
};
