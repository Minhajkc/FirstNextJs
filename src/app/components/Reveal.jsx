import React from "react";

const Reveal = ({ as: Tag = "div", delay, className = "", children, ...props }) => (
  <Tag className={className} {...props}>
    {children}
  </Tag>
);

export default Reveal;
