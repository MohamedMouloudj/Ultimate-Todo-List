"use client";
import { useEffect, useState } from "react";
import InputField from "./_components/InputField";
import { Task } from "@/types/Task";
import { v4 as uuidv4 } from "uuid";
import Tasks from "./_components/Tasks";
import DoneTasks from "./_components/DoneTasks";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";

export default function Home() {
  const [todo, setTodo] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      setTasks(JSON.parse(tasks));
    }
    const completedTasks = localStorage.getItem("completedTasks");
    if (completedTasks) {
      setCompletedTasks(JSON.parse(completedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [tasks, completedTasks]);

  function completeTask(id: string): void {
    const task = tasks.find((task) => task.id === id);
    if (!task) return;
    task.completed = true;
    setTasks(tasks.filter((task) => task.id !== id));
    setCompletedTasks([...completedTasks, task]);
  }

  function uncompleteTask(id: string): void {
    const task = completedTasks.find((task) => task.id === id);
    if (!task) return;
    task.completed = false;
    setCompletedTasks(completedTasks.filter((task) => task.id !== id));
    setTasks([...tasks, task]);
  }

  function addTask(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (!todo) return;
    setTasks([...tasks, { id: uuidv4(), title: todo, completed: false }]);
    setTodo("");
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const activeTasks = [...tasks.map((task) => ({ ...task }))];
    const completed = [...completedTasks.map((task) => ({ ...task }))];

    let movedTask: Task;

    if (source.droppableId === "tasks") {
      movedTask = activeTasks[source.index];
      activeTasks.splice(source.index, 1);
    } else {
      movedTask = completed[source.index];
      completed.splice(source.index, 1);
    }

    if (destination.droppableId === "tasks") {
      movedTask.completed = false;
      activeTasks.splice(destination.index, 0, movedTask);
    } else {
      movedTask.completed = true;
      completed.splice(destination.index, 0, movedTask);
    }

    setTasks(activeTasks);
    setCompletedTasks(completed);
  };

  return (
    <main className="container mx-auto h-screen p-4 flex flex-col items-center">
      <h1 className="text-3xl text-center font-bold uppercase">
        Your tasks buddy
      </h1>
      <InputField todo={todo} setTodo={setTodo} onAddTask={addTask} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-[1fr,1fr] gap-4 w-full max-md:grid-cols-1">
          <Tasks
            tasks={tasks}
            setTasks={setTasks}
            onCompleteTask={completeTask}
          />
          <DoneTasks
            tasks={completedTasks}
            setTasks={setCompletedTasks}
            onUncompleteTask={uncompleteTask}
          />
        </div>
      </DragDropContext>
    </main>
  );
}
