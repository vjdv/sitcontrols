import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s from "./button.scss";

export default function Button(props) {
  var { label, icon, classIcon, loading, children, ...newprops } = props;
  const content = label || children;
  return (
    <button className={s.sitcontrolbtn} {...newprops}>
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
  loading: PropTypes.bool
};

Button.defaultProps = {
  loading: false
};
