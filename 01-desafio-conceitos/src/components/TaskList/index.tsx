import { Trash } from "phosphor-react";
import React from "react";
import { Task } from "../../models/Task";
import EmptyTaskContent from "../EmptyTaskContent";

import styles from "./TaskList.module.css";

interface TaskListProps {
  taskList: Task[];
  setTaskList: (tasks: Task[]) => void;
}

export default function TaskList({ taskList, setTaskList }: TaskListProps) {
  function deleteTask(taskId: string) {
    const taskListWithoutDeletedOne = taskList.filter((task) => {
      return task.id !== taskId;
    });

    setTaskList(taskListWithoutDeletedOne);
  }

  function toggleTask(taskId: string) {
    const index = taskList.findIndex((task) => task.id === taskId);

    taskList[index].completed = !taskList[index].completed;

    setTaskList([...taskList]);
  }

  const taskListLength = taskList.length;

  let tasksCompleted = 0;

  function getCompletedTasks() {
    for (var task of taskList) {
      if (task.completed) tasksCompleted++;
    }

    return tasksCompleted;
  }

  return (
    <>
      <div className={styles.task}>
        <header>
          <div className={styles.createdTasks}>
            <strong>Tarefas criadas</strong>
            <p>{taskList.length}</p>
          </div>
          <div className={styles.completedTasks}>
            <strong>Concluídas</strong>
            <p>
              {getCompletedTasks()} de {taskListLength}
            </p>
          </div>
        </header>
      </div>
      {taskList.length == 0 && <EmptyTaskContent />}

      {taskList.map((task) => {
        return (
          <div key={task.id} className={styles.taskContent}>
            <input
              type="checkbox"
              name={task.name}
              id={task.id}
              onChange={() => toggleTask(task.id)}
              checked={task.completed}
            />
            <p>{task.name}</p>
            <button onClick={() => deleteTask(task.id)}>
              <Trash size={20} />
            </button>
          </div>
        );
      })}
    </>
  );
}
