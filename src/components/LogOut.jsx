import React from "react";
import { Link } from "react-router-dom";

const LogOut = () => {
	return (
		<Link
			className="absolute top-2 right-2 p-3 rounded bg-red-400 text-white"
			to="/"
		>
			Log out
		</Link>
	);
};

export default LogOut;
