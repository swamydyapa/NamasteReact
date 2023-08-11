import React, { Component } from "react";
import ReactDOM from "react-dom";

const title = <h1 className="title"> Hello React 😍🚀</h1>;

const FooterComponent = () => {
	return <h1 className="footer">🚀I am a Footer🚀</h1>;
};
// can also place React components inside React element

const footerElem = <div className="title"> <FooterComponent/> </div>;

const HeadingComponent = () => {
	return (
		<div className="container">
			{title}
			<h1 className="heading">Heading Component🚀🚀</h1>
			{/* components can also be called as a fn }*/}

			{/* {FooterComponent()} */}

			{/* components can also be called as a tag when it doesn't have children}*/}
			{/* {<FooterComponent />} */}

			{/* components can also be called as a tag when it has children}*/}
			{/* <FooterComponent></FooterComponent> */}
			{footerElem}
		</div>
	);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
