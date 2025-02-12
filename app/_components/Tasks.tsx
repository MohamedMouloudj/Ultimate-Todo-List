import React, { useState } from "react";
import { Task } from "@/types/Task";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete, MdOutlineDone } from "react-icons/md";
import { Draggable, Droppable } from "@hello-pangea/dnd";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  onCompleteTask: (id: string) => void;
};
const Tasks: React.FC<Props> = ({ tasks, setTasks, onCompleteTask }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<Task | null>(null);
  return (
    <div className="flex flex-col items-center w-full max-md:w-full p-4 gap-2">
      <h2 className="text-xl font-bold mt-2">Tasks to do</h2>
      <Droppable droppableId="tasks">
        {(provider) => (
          <ul
            className="p-4 w-full shadow-md rounded-md flex flex-col gap-2"
            ref={provider.innerRef}
            {...provider.droppableProps}
          >
            {tasks.length > 0 ? (
              tasks.map((task, i) => (
                <Draggable key={task.id} draggableId={task.id} index={i}>
                  {(provider) => (
                    <li
                      className="bg-gradient-to-r from-primary-800 to-primary-600 rounded-md p-2 text-neutral-50"
                      {...provider.draggableProps}
                      {...provider.dragHandleProps}
                      ref={provider.innerRef}
                    >
                      <form className="flex items-center gap-2">
                        {edit && editedTask?.id === task.id ? (
                          <textarea
                            className="flex-1 h-full p-2 border border-neutral-700 rounded text-neutral-950 focus:outline-none resize-none"
                            value={task.title}
                            onChange={(e) => {
                              setTasks(
                                tasks.map((t) =>
                                  t.id === task.id
                                    ? { ...t, title: e.target.value }
                                    : t
                                )
                              );
                            }}
                            rows={1}
                          />
                        ) : (
                          <span
                            className={`${
                              task.completed ? "line-through" : ""
                            } ml-2 flex-1`}
                          >
                            {task.title}
                          </span>
                        )}
                        <div className="flex gap-2">
                          <button
                            type="button"
                            className="bg-accent-600 p-1 rounded hover:bg-accent-500 transition duration-300"
                            onClick={() => {
                              setTasks(tasks.filter((t) => t.id !== task.id));
                              localStorage.setItem(
                                "tasks",
                                JSON.stringify(tasks)
                              );
                            }}
                          >
                            <MdOutlineDelete />
                          </button>
                          <button
                            type="button"
                            className="bg-accent-600 p-1 rounded hover:bg-accent-500 transition duration-300"
                            onClick={() => {
                              setEdit(!edit);
                              setEditedTask(task);
                            }}
                          >
                            <FaRegEdit />
                          </button>
                          <button
                            type="button"
                            className="bg-accent-600 p-1 rounded hover:bg-accent-500 transition duration-300"
                            onClick={() => {
                              onCompleteTask(task.id);
                            }}
                          >
                            <MdOutlineDone />
                          </button>
                        </div>
                      </form>
                    </li>
                  )}
                </Draggable>
              ))
            ) : (
              <p className="text-neutral-500 text-lg">No tasks to do 🥳</p>
            )}
            {provider.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

export default Tasks;
