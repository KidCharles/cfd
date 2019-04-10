import React from "react";

import "./toolbar.css";

const toolbar = props => {
    let toolbarClasses ='toolbar';
    if (props.show){
        toolbarClasses = 'toolbar open';
    }
  return (
    <nav className={toolbarClasses}>
      <ul>
        <li className="">About</li>
        <li className="">Dental</li>
        <li className="">Medicare</li>
      </ul>
    </nav>
  );
};

export default toolbar;
