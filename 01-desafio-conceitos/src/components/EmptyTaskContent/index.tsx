import React from "react";

import styles from "./EmptyTaskContent.module.css";

import task from "../../assets/task.svg";

export default function EmptyTaskContent() {
  return (
    <div className={styles.content}>
      <img src={task} alt="Imagem de tarefa" />
      <span>Você ainda não tem tarefas cadastradas</span>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
