import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import s from "./button.scss";

const variants = { primary: s.primary, secondary: s.secondary, success: s.success, danger: s.danger, warning: s.warning, info: s.info, light: s.light, dark: s.dark, link: s.link };

export default function Button(props) {
  var { label, icon, classIcon, loading, children, ...newprops } = props;
  const content = label || children;
  return (
    <button className={cx(s.sitcontrolbtn, variants[props.variant])} {...newprops}>
      {loading && <FontAwesomeIcon className="fa-pulse" icon="spinner" />}
      {!loading && icon ? <FontAwesomeIcon icon={icon} /> : undefined}
      {!loading && classIcon ? <span className={classIcon} /> : undefined}
      {loading || icon || classIcon ? " " : undefined}
      {content}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  classIcon: PropTypes.string,
  loading: PropTypes.bool,
  variant: PropTypes.string
};

Button.defaultProps = {
  loading: false,
  variant: "primary"
};
