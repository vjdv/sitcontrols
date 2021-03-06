import Button from "./components/buttons/button";
import Input from "./components/inputs/input";
import InputBox from "./components/containers/inputbox";
import NumberInput from "./components/inputs/numberinput";
import NumberInputBox from "./components/containers/numberinputbox";
import InputOption from "./components/inputs/inputoption";
import DatePicker from "./components/date/datepicker";
import Select from "./components/combos/select";
import SelectBox from "./components/containers/selectbox";
import CheckBox from "./components/containers/checkbox";
import Modal from "./components/containers/modal";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner, faCaretLeft, faCaretRight, faAngleLeft, faAngleRight, faCalendarAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { ModalContent, ModalButtons } from "./components/containers/modal";

library.add(faSpinner, faCaretLeft, faCaretRight, faAngleLeft, faAngleRight, faCalendarAlt, faCircle, faCheckCircle);

export { Button, Input, InputBox, NumberInput, NumberInputBox, InputOption, DatePicker, Select, SelectBox, CheckBox, Modal, ModalContent, ModalButtons };
