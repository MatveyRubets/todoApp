import React from "react";

const Filter = ({ searchFilter, filter }) => {
	return (
		<input
			className="border-solid border-2 rounded pr-3 pl-8 py-2 mr-3"
			type="text"
			minLength="1"
			maxLength="25"
			placeholder="Search"
			onChange={searchFilter}
			value={filter}
		/>
	);
};

export default Filter;
