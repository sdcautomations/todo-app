import { useState } from "react";
import styles from "./app.module.scss";
import { Todo } from "./components";

export const App = () => {
  const [tasks, setTasks] = useState<Array<string>>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTask = (newTask: string) => {
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const handleInputChange = (value: any) => {
    setInputValue(value);
  };

  return (
    <main className={styles["app"]}>
      <div className={styles["app__title"]}>Todo App</div>

      <div className={styles["app__tasks"]}>
        {tasks.map((e: string) => {
          return <Todo content={e} />;
        })}
      </div>

      <div className={styles["app__form"]}>
        <input
          className={styles["app__form__input"]}
          type="text"
          value={inputValue}
          placeholder="New task..."
          onChange={(e: any) => {
            handleInputChange(e.target.value);
          }}
        />

        <div
          className={styles["app__form__button"]}
          onClick={() => {
            handleAddTask(inputValue);
          }}
        >
          Add Task
        </div>
      </div>
    </main>
  );
};
