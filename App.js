import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1 className="title"> Hello React 😍🚀</h1>;

const FooterComponent = () => {
	return <h1 className="footer">🚀I am a Footer🚀</h1>;
};

// can also place React components inside React element
const footerElem = (
	<div className="title">
		<FooterComponent />
	</div>
);

const HeadingComponent = () => {
	return (
		<div className="container">
			{title}

			<h1 className="heading">Heading Component🚀🚀</h1>
			{/* components can also be called as a fn without any child elements or content. }*/}

			{/* {FooterComponent()} */}

			{/* components can also be called/render as a self closing tag when it doesn't have any children or content }*/}

			{/* <FooterComponent /> */}

			{/* components can also be render as paired tags when it has children or content }*/}
			
			{/* <FooterComponent></FooterComponent> */}
			{footerElem}
		</div>
	);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
