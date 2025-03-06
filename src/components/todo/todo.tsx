import { useState } from "react";
import styles from "./todo.module.scss";

export type TodoProps = {
  content: string;
};

export const Todo = ({ content }: TodoProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={!isChecked ? styles["todo"] : styles["todo--checked"]}
      onClick={handleClick}
    >
      {content}
    </div>
  );
};
