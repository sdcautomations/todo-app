import { useState } from "react";
import styles from "./app.module.scss";
import { Todo } from "./components";

export const App = () => {
  const [tasks, setTasks] = useState<Array<string>>([]);

  const handleAddTask = (newTask: string) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <main className={styles["app"]}>
      <div className={styles["app__title"]}>Todo App</div>

      <div className={styles["app__tasks"]}>
        {tasks.map((e: string) => {
          return <Todo content={e} />;
        })}
      </div>
    </main>
  );
};
