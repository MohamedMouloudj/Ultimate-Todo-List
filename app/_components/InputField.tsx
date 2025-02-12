"use client";

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  onAddTask: (e: React.FormEvent<HTMLFormElement>) => void;
};

const InputField: React.FC<Props> = ({ todo, setTodo, onAddTask }) => {
  return (
    <form
      className="p-4 w-1/2 max-md:w-full flex gap-2 items-center shadow-md rounded-md"
      onSubmit={onAddTask}
    >
      <input
        className="flex-1 h-full p-2 border border-neutral-700 rounded
         focus:outline-none focus:ring-2 focus:ring-primary-600
         transition duration-300 max-md:p-1 max-md:text-sm"
        type="text"
        placeholder="Add a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="h-full p-2 bg-accent-600 text-neutral-50
         rounded hover:bg-accent-500 transition duration-300 max-md:text-base "
        type="submit"
      >
        Add task
      </button>
    </form>
  );
};
export default InputField;
