import { useState } from "react";
import Add from "./todo/Add";
import List from "./todo/List";
import Tabs from "./todo/Tabs";

const Todo = () => {
	const [filter, setFilter] = useState("all");
	return (
		<div className="mx-auto max-w-2xl p-4">
			<h1 className="mt-8 text-center font-sans text-2xl font-semibold">
				#todo
			</h1>
			<Tabs setFilter={setFilter} />
			<List filter={filter} />
		</div>
	);
};

export default Todo;
