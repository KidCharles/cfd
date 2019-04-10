import React from "react";

import './Home.css';

import Content from "../Content/Content";
import Button from "../Button/Button";

export default function Home(props) {
  return (
    <div className='home_wrapper' >
      <h1>Home</h1>
      <Content />
      <Button />
      <Content />
    </div>
  );
}
