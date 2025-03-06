import styles from "./todo.module.scss";

export type TodoProps = {
  content: string;
};

export const Todo = ({ content }: TodoProps) => {
  return <div className={styles["todo"]}>{content}</div>;
};
