import React from "react";
import "bulma/css/bulma.css";
const cases = {
  isActive: "is-active",
  isBlack: "is-black",
  isCentered: "is-centered",
  isDanger: "is-danger",
  isDark: "is-dark",
  isFocused: "is-focused",
  isGrouped: "is-grouped",
  isHovered: "is-hovered",
  isInfo: "is-info",
  isInverted: "is-inverted",
  isLarge: "is-large",
  isLight: "is-light",
  isLink: "is-link",
  isLoading: "is-loading",
  isMedium: "is-medium",
  isOutlined: "is-outlined",
  isPrimary: "is-primary",
  isRight: "is-right",
  isRounded: "is-rounded",
  isSelected: "is-selected",
  isSmall: "is-small",
  isStatic: "is-static",
  isSuccess: "is-success",
  isText: "is-text",
  isWarning: "is-warning",
  isWhite: "is-white"
};

const CoolButton = props => {
  let styleBtn = " button ";
  for (let key in props) {
    if (props[key] === true) {
      styleBtn += `${cases[key]} `;
    }
  }
  console.log(styleBtn);
  return <button className={props.className + styleBtn}>{props.name}</button>;
};
export default CoolButton;
