import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import TodoItem from "../components/TodoItem";
import { nanoid } from "nanoid";

const ListPage = () => {
	const getLocalTodos = () => {
		let list = localStorage.getItem("todos");

		if (list) {
			return JSON.parse(localStorage.getItem("todos"));
		} else {
			return [];
		}
	};

	const [isVisible, setIsVisible] = useState(false);
	const [todos, setTodos] = useState(getLocalTodos());
	const [todo, setTodo] = useState("");
	const [toggleEdit, setToggleEdit] = useState(false);
	const [filter, setFilter] = useState("");
	const [isEdit, setIsEdit] = useState(null);

	const handleChange = e => {
		setTodo(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		const newTodo = {
			id: nanoid(),
			text: todo.trim(),
		};
		if (!newTodo.text) {
			alert("Please add some text");
			return;
		} else if (todo && toggleEdit) {
			let editedItem = todos.map(elem =>
				elem.id === isEdit ? { ...elem, text: todo } : elem
			);

			setTodos(editedItem);
			setIsVisible(false);
			setTodo("");
			setToggleEdit(false);
		} else {
			setTodos([...todos, newTodo]);
			setIsVisible(false);
			setTodo("");
		}
	};

	const handleDeleteTodo = id => {
		const afterDeleteTodos = [...todos].filter(todo => todo.id !== id);

		setTodos(afterDeleteTodos);
	};

	const handleEditTodo = id => {
		let newEditItem = todos.find(todo => todo.id === id);

		setToggleEdit(true);
		setIsVisible(true);
		setTodo(newEditItem.text);
		setIsEdit(id);
	};

	const getVisibleTodos = () => {
		const normalizedFilter = filter.toLowerCase();

		return todos.filter(todo =>
			todo.text.toLowerCase().includes(normalizedFilter)
		);
	};

	const searchFilter = e => {
		setFilter(e.target.value);
	};

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

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
						onChange={searchFilter}
						value={filter}
					/>
					<button
						onClick={() => setIsVisible(!isVisible)}
						className="w-full rounded bg-blue-400 text-white"
						type="button"
					>
						New
					</button>
				</div>
				<>
					{isVisible ? (
						<form
							onSubmit={handleSubmit}
							className="flex justify-between w-full my-2 p-2 items-center"
						>
							<input
								type="text"
								className="border-solid border-2 rounded pl-2 py-1 italic"
								placeholder="Dogwalk..."
								onChange={handleChange}
								value={todo}
							/>
							{toggleEdit ? (
								<button className="text-white py-1 bg-slate-900" type="submit">
									Change
								</button>
							) : (
								<button className="text-white py-1 bg-slate-900" type="submit">
									Save
								</button>
							)}
						</form>
					) : null}

					<div className=" mt-3 rounded">
						{getVisibleTodos() &&
							getVisibleTodos().map(({ id, text }) => (
								<TodoItem
									key={id}
									id={id}
									text={text}
									removeItem={handleDeleteTodo}
									editItem={handleEditTodo}
								/>
							))}
					</div>
				</>
			</div>
		</div>
	);
};

export default ListPage;
