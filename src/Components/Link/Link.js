import React from "react";

const Link = (props) => {
  const { name, link } = props.route;

  return (
    // <h1>thus is link</h1>
    <li className='mr-16'>
      <a href={link}>{name}</a>
    </li>
  );
};

export default Link;
