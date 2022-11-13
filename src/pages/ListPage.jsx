import React, { useState } from "react";
import Todo from "../components/Todo";
import { BsSearch } from "react-icons/bs";

const ListPage = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [toDo, setToDo] = useState("");

	return (
		<div>
			<h1 className=" text-center mb-5">My To-Do list</h1>
			<div className=" border-2 border-neutral-400 rounded p-5">
				<div className="header relative flex items-center">
					<BsSearch className="w-5 h-5 absolute ml-2 pointer-events-none" />
					<input
						className="border-solid border-2 rounded pr-3 pl-8 py-2 mr-3"
						type="text"
						minLength="1"
						maxLength="25"
						placeholder="Search"
					/>
					<button
						onClick={() => setIsVisible(!isVisible)}
						className="w-full rounded bg-blue-400 text-white"
						type="button"
					>
						New
					</button>
				</div>
				<div>{isVisible ? <Todo /> : null}</div>
			</div>
		</div>
	);
};

export default ListPage;
