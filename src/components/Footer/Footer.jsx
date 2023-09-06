import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="copyright">
      Copyright {year} developed by
      <a href="https://aallawi.github.io/portfolio" target="_blank">
        Ahmed Allawi.
      </a>
      All rights reserved
    </div>
  );
};
