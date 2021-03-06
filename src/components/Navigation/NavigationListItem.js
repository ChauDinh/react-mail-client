import React from 'react';
import { Link } from "react-router-dom";

const NavigationListItem = ({ label, path, isSelected }) => {
  const className = isSelected
    ? "navigation-bar__li--selected"
    : "navigation-bar__li";

  return (
    <li className={className}>
      <Link className="navigation-bar__link" style={{ textDecoration: "none" }} to={path}>
        {label}
      </Link>
    </li>
  )
};

export default NavigationListItem
