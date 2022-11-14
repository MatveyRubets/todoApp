import React, { useState } from "react";
import { BsPen, BsTrash } from "react-icons/bs";

const TodoItem = ({ id, text, removeItem, editItem }) => {
	return (
		<div className=" p-2 bg-slate-50 flex mt-2 justify-between ">
			<p>{text}</p>
			<div className="flex gap-1">
				<BsPen
					onClick={() => editItem(id)}
					className="bg-blue-300 cursor-pointer rounded p-1 w-6 h-6"
				/>
				<BsTrash
					onClick={() => removeItem(id)}
					className="bg-red-300 cursor-pointer rounded p-1 w-6 h-6"
				/>
			</div>
		</div>
	);
};

export default TodoItem;
