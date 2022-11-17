export const getLocalTodos = () => {
	let list = localStorage.getItem("todos");

	if (list) {
		return JSON.parse(localStorage.getItem("todos"));
	} else {
		return [];
	}
};
