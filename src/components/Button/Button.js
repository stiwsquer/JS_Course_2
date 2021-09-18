import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.scss";
import { StyledButton } from "./Button.style";

export default React.memo(function Button({
  children,
  type,
  className,
  onClick,
}) {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
});
