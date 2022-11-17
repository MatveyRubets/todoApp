import React from "react";

const Title = ({ title, children }) => {
	return (
		<>
			<h1 className=" text-center mb-5">{title}</h1>
			{children}
		</>
	);
};

export default Title;
