import React from "react";
import "./Product.css";

export default function Products(props) {
  let title = props.title;
  // let pic = props.pic;
  // let route = props.route;
  
  return (
    <div className="card">
      <img src="https://i.imgur.com/rmWiv5W.png" alt="Avatar" />
      <div className="container">
        <h1>{title}</h1>
        <p>Learn More</p>
      </div>
    </div>
  );
}
