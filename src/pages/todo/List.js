import TrashIcon from "./TrashIcon";
import Add from "./Add.js";
import ListItem from "./ListItem.js";
import { useEffect, useState } from "react";

const List = ({ filter }) => {
	// Get local stotage
	let data = JSON.parse(localStorage.getItem("todos"));

	// Use it if exists or start from scratch
	const [todos, setTodos] = useState(data || []);

	useEffect(() => {
		// Save each mod to local storage
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleDeleteAll = () => {
		let newArr = todos.filter((x) => !x.completed);
		setTodos(newArr);
	};

	return (
		<div>
			{filter !== "completed" && <Add todos={todos} setTodos={setTodos} />}
			<ul className="my-8 flex flex-col space-y-6">
				{filter === "all" &&
					todos
						.filter((x) => x.completed === false)
						.map((todo) => (
							<ListItem
								todo={todo}
								todos={todos}
								setTodos={setTodos}
								filter={filter}
								key={todo.id}
							/>
						))}
				{filter === "all" &&
					todos.filter((x) => x.completed === true).length > 0 && <hr />}
				{filter === "all" &&
					todos
						.filter((x) => x.completed === true)
						.map((todo) => (
							<ListItem
								todo={todo}
								todos={todos}
								setTodos={setTodos}
								filter={filter}
								key={todo.id}
							/>
						))}
				{filter === "active" &&
					todos
						.filter((x) => x.completed === false)
						.map((todo) => (
							<ListItem
								todo={todo}
								todos={todos}
								setTodos={setTodos}
								filter={filter}
								key={todo.id}
							/>
						))}
				{filter === "completed" &&
					todos
						.filter((x) => x.completed === true)
						.map((todo) => (
							<ListItem
								todo={todo}
								todos={todos}
								setTodos={setTodos}
								filter={filter}
								key={todo.id}
							/>
						))}
			</ul>
			{filter === "completed" &&
				todos.filter((x) => x.completed).length > 0 && (
					<div className="flex justify-end">
						<button
							onClick={() => handleDeleteAll()}
							className="flex items-center justify-center rounded-lg bg-red-500 px-8 py-4 text-white hover:bg-red-600"
						>
							<TrashIcon className="mr-2 h-4 w-4 text-white group-hover:text-gray-500" />
							delete all
						</button>
					</div>
				)}
		</div>
	);
};

export default List;
