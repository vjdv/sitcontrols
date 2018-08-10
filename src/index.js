import Input from "./components/input";
import InputBox from "./components/inputbox";
import DatePicker from "./components/date/datepicker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretLeft, faCaretRight, faAngleLeft, faAngleRight, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faCaretLeft, faCaretRight, faAngleLeft, faAngleRight, faCalendarAlt);

var SitControls = {
  Input: Input,
  InputBox: InputBox,
  DatePicker: DatePicker
};

export { Input, InputBox, DatePicker };

export default SitControls;
