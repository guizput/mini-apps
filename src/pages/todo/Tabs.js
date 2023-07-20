const Tabs = ({ setFilter }) => {
  const handleClick = (e) => {
    setFilter(e.target.id);
  };
  return (
    <div className="mt-8 flex items-center justify-center border-b-2 border-gray-300">
      <div className="flex-1">
        <input
          className="peer hidden"
          type="radio"
          name="todo"
          id="all"
          defaultChecked
          onClick={(e) => handleClick(e)}
        />
        <label
          className="flex w-full cursor-pointer items-center justify-center border-b-4 border-solid border-transparent p-4 peer-checked:border-blue-500"
          htmlFor="all"
        >
          All
        </label>
      </div>
      <div className="flex-1">
        <input
          className="peer hidden"
          type="radio"
          name="todo"
          id="active"
          onClick={(e) => handleClick(e)}
        />
        <label
          className="flex w-full cursor-pointer items-center justify-center border-b-4 border-solid border-transparent p-4 peer-checked:border-blue-500"
          htmlFor="active"
        >
          Active
        </label>
      </div>
      <div className="flex-1">
        <input
          className="peer hidden"
          type="radio"
          name="todo"
          id="completed"
          onClick={(e) => handleClick(e)}
        />
        <label
          className="flex w-full cursor-pointer items-center justify-center border-b-4 border-solid border-transparent p-4 peer-checked:border-blue-500"
          htmlFor="completed"
        >
          Completed
        </label>
      </div>
    </div>
  );
};

export default Tabs;
