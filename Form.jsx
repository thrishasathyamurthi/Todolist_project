import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handlesubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handlesubmit}>
      <div className={styles.inputcontainer}>
        <input
          className={styles.moderninput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter Todo item..."
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
