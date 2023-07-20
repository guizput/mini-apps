import { useState } from "react";

const Add = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        completed: false,
        body: todo,
      },
    ]);
    setTodo("");
  };
  return (
    <div className="my-4">
      <form className="flex items-center" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="mr-4 flex-1 rounded-xl border-2 border-gray-300 px-2 py-4"
          type="text"
          placeholder="Add todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          required
        />
        <button
          className="rounded-lg bg-blue-500 px-8 py-4 text-white hover:bg-blue-600"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
