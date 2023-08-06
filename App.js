import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child" }, [
		React.createElement("h1", {}, "This is Namaste React"),
		React.createElement("h2", {}, "by Swamy Dyapa"),
	]),
	React.createElement("div", { id: "child2" }, [
		React.createElement("h1", {}, "h1 from child2"),
		React.createElement("h2", {}, "h2 from child2"),
	]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
