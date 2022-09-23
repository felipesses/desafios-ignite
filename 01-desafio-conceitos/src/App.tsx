import React, { ChangeEvent, FormEvent, useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import { v4 as uuidv4 } from "uuid";

import "./global.css";
import styles from "./App.module.css";
import { Task } from "./models/Task";
import TaskList from "./components/TaskList";

export default function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [newTaskName, setNewTaskName] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask: Task = {
      id: uuidv4(),
      name: newTaskName,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
    setNewTaskName("");
  }

  function handleChangeNewTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskName(event.target.value);
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <TodoForm
            onCreateNewTask={handleCreateNewTask}
            onChangeNewTask={handleChangeNewTask}
            onInvalid={handleNewTaskInvalid}
            value={newTaskName}
          />
          <TaskList taskList={taskList} setTaskList={setTaskList} />
        </main>
      </div>
    </div>
  );
}
