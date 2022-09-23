import React, {
  ChangeEvent,
  FormEvent,
  InputHTMLAttributes,
  useState,
} from "react";

import styles from "./TodoForm.module.css";
import { PlusCircle } from "phosphor-react";

interface TodoFormProps extends InputHTMLAttributes<HTMLInputElement> {
  onCreateNewTask: (event: FormEvent) => void;
  onChangeNewTask: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function TodoForm({
  onCreateNewTask,
  onChangeNewTask,
  ...props
}: TodoFormProps) {
  return (
    <form className={styles.todoForm} onSubmit={onCreateNewTask}>
      <input
        name="todo"
        placeholder="Adicione uma nova tarefa"
        onChange={onChangeNewTask}
        required
        {...props}
      />
      <button type="submit">
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  );
}
