import React, { Component } from "react";
import ReactDOM from "react-dom";

// React Element
const heading = <h1 className="heading">Helloo React🚀🚀</h1>;

//  React Functional Component
const HeadingComponent = () => {
	return <h1 className="heading">Helloo React🚀🚀</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(HeadingComponent);
   