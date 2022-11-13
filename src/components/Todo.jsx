import React, { useState } from "react";
import { nanoid } from "nanoid";
// import { BsPen, BsTrash } from "react-icons/bs";

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");

	const handleChange = e => {
		setTodo(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		const newTodo = {
			id: nanoid(),
			text: todo,
		};

		setTodos([...todos, newTodo]);
		setTodo("");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex justify-between w-full my-2 p-3 items-center"
		>
			<input
				type="text"
				className="border-solid border-2 rounded pl-2 py-1 italic"
				placeholder="Dogwalk..."
				onChange={handleChange}
				value={todo}
			/>
			<button className="text-white py-1 bg-slate-900" type="submit">
				Save
			</button>
		</form>
	);
};

export default Todo;

{
	/* <div className="flex gap-2">
<BsPen className="bg-blue-300 cursor-pointer rounded p-1 w-6 h-6" />
<BsTrash className="bg-red-300 cursor-pointer rounded p-1 w-6 h-6" />
</div> */
}
