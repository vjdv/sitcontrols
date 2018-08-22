import Button from "./components/buttons/button";
import Input from "./components/inputs/input";
import InputBox from "./components/containers/inputbox";
import InputOption from "./components/inputs/inputoption";
import DatePicker from "./components/date/datepicker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner, faCaretLeft, faCaretRight, faAngleLeft, faAngleRight, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faSpinner, faCaretLeft, faCaretRight, faAngleLeft, faAngleRight, faCalendarAlt);

export { Button, Input, InputBox, InputOption, DatePicker };
