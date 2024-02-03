"use client";

import React from "react";
import { CLIENT_MENU_OPTIONS } from "./constants";

const DashboardMenu = ({ role }) => {
  const onClick = ({ target: { id } }) => {
    console.log("id", id);
  };

  return (
    <section>
      <h2>Title</h2>
      <ul>
        {CLIENT_MENU_OPTIONS.map((option) => (
          <li key={option.label} onClick={onClick} {...option.props}>
            {option.label}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DashboardMenu;
