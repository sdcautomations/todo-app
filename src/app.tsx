import { useState } from "react";
import styles from "./app.module.scss";

import { Todo } from "./components";
import { makeId } from "./utils/makeId";

type Task = {
  id: string;
  content: string;
  isChecked: boolean;
};

export const App = () => {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const createNewTask = ({
    content,
    id,
    isChecked,
  }: {
    content: string;
    id?: string;
    isChecked?: boolean;
  }) => {
    return {
      id: id || makeId(),
      content,
      isChecked: isChecked || false,
    };
  };

  const handleTaskAdd = (newTaskContent: string) => {
    setTasks([...tasks, createNewTask({ content: newTaskContent })]);
    setInputValue("");
  };

  const handleTaskClick = (id: string) => {
    const newTasks = tasks.map((e: Task) => {
      if (e.id === id) {
        e.isChecked = !e.isChecked;
      }

      return e;
    });

    setTasks(newTasks as Task[]);
  };

  const handleInputChange = (value: any) => {
    setInputValue(value);
  };

  const handleDeleteCheckedTasks = () => {
    const activeTasks = tasks.filter((e: Task) => e.isChecked !== true);

    setTasks(activeTasks);
  };

  const handleEditSaved = (id: string, newContent: string) => {
    const updatedTasks = tasks.map((e: Task) => {
      if (e.id === id) {
        e.content = newContent;
      }

      return e;
    });

    setTasks(updatedTasks);
  };

  const handleTaskDeleted = (id: string) => {
    const updatedTasks = tasks.filter((e: Task) => e.id !== id);

    setTasks(updatedTasks);
  };

  return (
    <main className={styles["app"]}>
      <div className={styles["app__title"]}>Todo App</div>

      <div className={styles["app__tasks"]}>
        {tasks.map((e: Task) => {
          return (
            <Todo
              id={e.id}
              key={e.id}
              content={e.content}
              isChecked={e.isChecked}
              onClick={handleTaskClick}
              onEditSaved={handleEditSaved}
              onTaskDeleted={handleTaskDeleted}
            />
          );
        })}
      </div>

      <div className={styles["app__form"]}>
        <div className={styles["app__form__title"]}>Add new task</div>

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
            handleTaskAdd(inputValue);
          }}
        >
          Add Task
        </div>

        <div
          className={styles["app__form__button"]}
          onClick={() => {
            handleDeleteCheckedTasks();
          }}
        >
          Delete finished tasks
        </div>
      </div>
    </main>
  );
};
